import {JetView, plugins} from "webix-jet";

export default class JetViewModule2Page2 extends JetView {

    config() {
        return {
            rows: [
                { template: "Page2", height: 40 },
                {
                    cols: [
                        { view: "button", value: "Page1", width: 300,
                            click: () => {
                                this.show("page1");
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
                        { view: "richselect", localId: "title", name: "title", label: "Title",
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
        console.log("JetViewModule2Page2.destroy()");
    }

}