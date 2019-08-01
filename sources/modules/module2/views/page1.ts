import {JetView, plugins} from "webix-jet";

export default class JetViewModule2Page1 extends JetView {

    config() {
        return {
            rows: [
                { template: "Page1", height: 40 },
                {
                    cols: [
                        { view: "button", value: "Page2", width: 300,
                            click: () => {
                                this.show("page2");
                            }
                        },
                        { view: "button", value: "Page3", width: 300,
                            click: () => {
                                this.show("page3");
                            }
                        }
                    ]
                },
                { view: "form", localId: "form1", borderless: true, elementsConfig: { labelWidth: 120 },
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

    urlChange(view, url) {

    }

    destroy() {
        console.log("JetViewModule2Page1.destroy()");
    }

}