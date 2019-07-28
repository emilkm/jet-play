import {JetView, plugins} from "webix-jet";

export default class JetViewModule1Page1 extends JetView {

    config() {
        const self = this;

        return {
            rows: [
                { view: "button", value: "Module2", width: 300,
                    click: () => {
                        this.app.app.show("/top/module2");
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
        console.log("JetViewModule1Page1.destroy()");
    }

    urlChange(view, url){

    }

    reset() {

    }
}