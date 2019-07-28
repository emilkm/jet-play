let path = require("path");
let webpack = require("webpack");

module.exports = function(env) {

    let pack = require("./package.json");
    let CopyPlugin = require('copy-webpack-plugin');
    let TerserPlugin = require('terser-webpack-plugin');
    
    let production = !!(env && env.production === "true");
    let testing = !!(env && env.testing !== undefined);
    let cypress = !!(env && env.cypress !== undefined);

    let config = {
        mode: (production) ? "production" : "development",
        entry: (function() {
            if (testing) {
                return "./tests/suite.ts";
            } else {
                return "./sources/app.ts";
            }
        }),
        output: {
            path: (testing) ? path.join(__dirname, "testbase") : path.join(__dirname, "codebase"),
            publicPath: (testing) ? "/testbase/" : "/codebase/",
            filename: "app.js",
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
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["./sources", "node_modules"],
            alias: {
                "jet-locales": path.resolve(__dirname, "sources/locales"),
                "jet-views": path.resolve(__dirname, "sources/views"),
                "@root": path.resolve(__dirname, "sources"),
                "@webix-jet": path.resolve(__dirname, "sources/webix-jet")
            }
        },
        plugins: [
            new CopyPlugin([
                { from: "./sources/styles/app.css", to: "styles/app.css" }
            ]),
            new webpack.DefinePlugin({
                VERSION: `"${pack.version}"`,
                APPNAME: `"${pack.name}"`,
                PRODUCTION: production,
                CYPRESS: cypress
            })
        ]
    };

    if (production) {
        config.optimization = {
            minimizer: [new TerserPlugin()]
        }
    }

    return config;
};
