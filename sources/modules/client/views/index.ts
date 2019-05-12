import {JetView} from "webix-jet";

export default class Client extends JetView {

    config() {
        return {
            rows: [
                {
                    cols: [
                        { template: "Client module index", height: 40 },
                        {},
                        { view: "button", value: "Person Search", width: 160,
                            click: () => {
                                this.show("person-search");
                            }
                        },
                        { view: "button", value: "Organisation Search", width: 160,
                            click: () => {
                                this.show("organisation-search");
                            }
                        }
                    ]
                },
                { $subview: true }
            ]
        };
    }
}

