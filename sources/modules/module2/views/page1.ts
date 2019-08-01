import {JetView, plugins} from "webix-jet";

export default class JetViewModule2Page1 extends JetView {

    config() {
        return {
            rows: [
                { view: "form", localId: "person:detail:form", borderless: true, elementsConfig: { labelWidth: 120 },
                    rows: [
                        { view: "combo", localId: "title", name: "title", label: "Title",
                            options: [
                                {id: 1, value: "a"},
                                {id: 2, value: "b"}
                            ]
                        },
                        {}
                    ]
                },
                {}
            ]
        };
    }

    init(view, url) {

    }

    ready(view, url) {

    }

    destroy() {
        console.log("JetViewModule2Page1.destroy()");
    }

    urlChange(view, url){

    }
}