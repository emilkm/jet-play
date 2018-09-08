import { JetApp, SubappRouter } from "@webix-jet/index";

declare var require, APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class App extends JetApp {
	constructor(config = {}) {
		const defaults = {
			id 		: "level1",
			version : VERSION,
			router 	: SubappRouter,
			debug 	: !PRODUCTION,
			start 	: "/level1",
            root	: "/top",
			rootevs : true,
            views : (v) => require("modules/level1/views/" + v)
        };

		super({ ...defaults, ...config });
		this.rootApp = config as JetApp;
	}
}