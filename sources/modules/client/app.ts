import { JetApp, SubRouter } from "@webix-jet/index";

declare var require, APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class App extends JetApp {
	constructor(config = {}, name = "") {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "client",
			version : VERSION,
			start 	: "/client/index",
            router 	: SubRouter,
            parentRouter: (config as JetApp).getRouter(),
            routerPrefix: "/" + name,
			rootevs : true,
            views   : (v) => require("@modules/client/views/" + v)
        };

		super({ ...defaults, ...config });
		this.rootApp = config as JetApp;
	}
}