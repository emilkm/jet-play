import { JetApp, SubRouter } from "webix-jet";

declare var require, APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class JetAppClient extends JetApp {
	public root: JetApp;

	constructor(config:any = {}) {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "client",
			version : VERSION,
			start 	: "/index",
            views   : (v) => require("@modules/client/views/" + v)
        };

		super({ ...defaults, ...config });
 
		this.root = config.app as JetApp;
	}
}