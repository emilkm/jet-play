import {JetView} from "webix-jet";

export default class PersonSearch extends JetView {
    config() {
        return { type: "line",
            rows: [
                { template: "Person Search", height: 40 },
                { padding: 5,
                    rows: [
                        { view: "button", value: "Person View", width: 160,
                            click: () => {
                                this.show("person");
                            }
                        },
                        { template: "person search result ..." }
                    ]
                }
            ]
        };
    }

    init(){
        this.app.callEvent("TitleChange", ["Person search"]);
    }
}