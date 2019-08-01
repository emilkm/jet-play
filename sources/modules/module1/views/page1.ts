import {JetView, plugins} from "webix-jet";

export default class JetViewModule1Page1 extends JetView {

    config() {
        return {
            rows: [
                {}
            ]
        };
    }

    init(view, url) {

    }

    ready(view, url) {

    }

    urlChange(view, url){

    }

    destroy() {
        console.log("JetViewModule1Page1.destroy()");
    }

}