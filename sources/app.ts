import { JetApp, HashRouter, plugins } from "webix-jet";
import views from "@root/views";
import session from "@root/models/session";

declare var APPNAME, VERSION, PRODUCTION;

export default class JetAppRoot extends JetApp {
	constructor(config = {}) {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/login",
            views	: views.resolveviews
		};

		super({ ...defaults, ...config });

		this.use(plugins.User, { model: session, afterLogin: "/top/module1" });
	}
}

webix.ready(() => {
	let app = new JetAppRoot();
	app.render();
});

