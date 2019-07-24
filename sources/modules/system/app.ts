import { JetApp, SubRouter } from "webix-jet";

declare var require, APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class AppJetApp extends JetApp {
	public root:JetApp;

	constructor(config:any = {}) {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "system",
			version : VERSION,
			start 	: "/index",
            views   : (v) => require("@modules/system/views/" + v)
        };

		super({ ...defaults, ...config });
 
		const root = config.app as JetApp;
	}
}