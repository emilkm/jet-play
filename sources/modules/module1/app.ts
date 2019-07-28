import { JetApp, SubRouter } from "webix-jet";

declare var require, APPNAME, VERSION, PRODUCTION;

export default class JetAppModule1 extends JetApp {
	constructor(config:any = {}) {
		const defaults = {
            debug 	: !PRODUCTION,
			id 		: "module1",
			version : VERSION,
			start 	: "/index",
            views : (v) => require("modules/module1/views/" + v)
        };

		super({ ...defaults, ...config });
	}
}