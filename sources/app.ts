import "./styles/app.css";
import { JetApp, EmptyRouter, HashRouter } from "@webix-jet/index";
import views from "@root/views";

declare var APPNAME, VERSION, PRODUCTION, BUILD_AS_MODULE;

export default class App extends JetApp {
	constructor(config = {}) {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/level1",
            views	: views.resolveviews
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
    webix.ready(() => {
        let app = new App();
        app.render();
    });
}

