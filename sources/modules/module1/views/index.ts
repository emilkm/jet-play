import {JetView, plugins} from "webix-jet";

export default class JetViewModule1 extends JetView {

    config() {
        return {
            rows: [
                { template: "Module1", height: 40 },
                { $subview: true }
            ]
        };
    }

    init(view, url) {
    }

    ready(view, url) {

    }

    destroy() {
        console.log("JetViewModule1.destroy()");
    }

    urlChange(view, url){
        if (url.length == 1) {
            this.show("page1");
        }
    }
}

