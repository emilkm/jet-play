import { JetApp, SubRouter } from "@webix-jet/index";

declare var require, APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class App extends JetApp {
	constructor(config = {}, name = "") {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "sub1v",
			version : VERSION,
			start 	: "/vsub1?id=1/sub2a?id=2a",
            router 	: SubRouter,
            parentRouter: (config as JetApp).getRouter(),
            routerPrefix: "/" + name,
			rootevs : true,
            views   : (v) => require("modules/sub1/views/" + v)
        };

		super({ ...defaults, ...config });
		this.rootApp = config as JetApp;
	}
}