let path = require("path");
let webpack = require("webpack");

module.exports = function(env) {

    let pack = require("./package.json");
    let ExtractTextPlugin = require("extract-text-webpack-plugin");

    let entry = "app";
    
    let production = !!(env && env.production === "true");
    let asmodule = !!(env && env.module !== undefined);
    let standalone = !!(env && env.standalone === "true");
    let testing = !!(env && env.testing !== undefined);
    let cypress = !!(env && env.cypress !== undefined);
    
    if (asmodule) {
        entry = env.module;
        pack.name = env.module;
    }

    let config = {
        entry: (function() {
            if (asmodule) {
                return "./sources/modules/" + env.module + "/" + env.module + ".ts";
            } else if (testing) {
                return "./tests/suite.ts";
            } else {
                return "./sources/app.ts";
            }
        }),
        output: {
            path: (testing) ? path.join(__dirname, "testbase") : path.join(__dirname, "codebase"),
            publicPath: (testing) ? "/testbase/" : "/codebase/",
            filename: entry + ".js",
            chunkFilename: "[name].js"
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    loader: "url-loader?limit=25000"
                },
                {
                    test: /\.(less|css)$/,
                    loader: ExtractTextPlugin.extract("css-loader!less-loader")
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["./sources", "node_modules"],
            alias: {
                "jet-views": path.resolve(__dirname, "sources/views"),
                "jet-locales": path.resolve(__dirname, "sources/locales"),
                "@root": path.resolve(__dirname, "sources"),
                "@webix-jet": path.resolve(__dirname, "sources/webix-jet")
            }
        },
        plugins: [
            new ExtractTextPlugin("./app.css"),
            new webpack.DefinePlugin({
                VERSION: `"${pack.version}"`,
                APPNAME: `"${pack.name}"`,
                PRODUCTION: production,
                BUILD_AS_MODULE: (asmodule || standalone),
                CYPRESS: cypress
            })
        ]
    };

    if (production) {
        config.plugins.push(
            new  webpack.optimize.UglifyJsPlugin({
                test: /\.js$/
            })
        );
    }

    if (asmodule){
        if (!standalone){
            config.externals = config.externals || {};
            config.externals = [ "webix-jet" ];
        }

        const out = config.output;
        const sub = standalone ? "full" : "modules";

        out.library = pack.name.replace(/[^a-z0-9]/gi, "");
        out.libraryTarget = "umd";
        out.path = path.join(__dirname, "codebase", sub);
        out.publicPath = "/codebase/" + sub + "/";
    }

    return config;
};
