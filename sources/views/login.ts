import {JetView, plugins} from "webix-jet";

export default class JetViewLogin extends JetView {

    config() {
        const self = this;

        return {
            rows: [
                { view: "button", value: "Login", width: 300,
                    click: () => {
                        this.app.show("/top/module1");
                    }
                },
                {}
            ]
        };
    }

    init(view, url) {
        const self = this;

    }

    ready(view, url) {

    }

    destroy() {
        console.log("JetViewLogin.destroy()");
    }

    urlChange(view, url){

    }

    reset() {

    }
}