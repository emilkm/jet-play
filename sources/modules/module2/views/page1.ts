import {JetView, plugins} from "webix-jet";

export default class JetViewModule2Page1 extends JetView {

    config() {
        const self = this;

        return {
            rows: [
                { view: "button", value: "Module1", width: 300,
                    click: () => {
                        this.app.app.show("/top/module1");
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
        console.log("JetViewModule2Page1.destroy()");
    }

    urlChange(view, url){

    }

    reset() {

    }
}