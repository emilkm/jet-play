import { JetApp, SubRouter } from "webix-jet";

declare var require, APPNAME, VERSION, PRODUCTION;

export default class JetAppModule2 extends JetApp {
	constructor(config:any = {}) {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "module2",
			version : VERSION,
			start 	: "/index",
            views : (v) => require("modules/module2/views/" + v)
        };

		super({ ...defaults, ...config });
	}
}