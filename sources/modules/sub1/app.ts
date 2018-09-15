import { JetApp, SubRouter } from "@webix-jet/index";

declare var require, APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class App extends JetApp {
	constructor(config = {}, name = "") {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "level1",
			version : VERSION,
			start 	: "/level2a", //sub app must start with a view
            router 	: SubRouter,
            parentRouter: (config as JetApp).getRouter(),
            routerPrefix: "/" + name,
			rootevs : true,
            views   : (v) => require("modules/level1/views/" + v)
        };

		super({ ...defaults, ...config });
		this.rootApp = config as JetApp;
	}
}