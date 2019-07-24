import {JetView} from "webix-jet";

export default class JetViewSystem extends JetView {

    config() {
        return {
            rows: [
                { template: "System module index", height: 40 },
                { view: "button", value: "Client via this app show()", width: 300,
                    click: () => {
                        this.show("/top/client");
                    }
                },
                { view: "button", value: "Client via this app show() #!", width: 300,
                    click: () => {
                        this.show("#!/top/client");
                    }
                },
                { view: "button", value: "Client via root app show()", width: 300,
                    click: () => {
                        let root: any = this.app["root"];
                        root.show("/top/client");
                    }
                },
                {}
            ]
        };
    }

    init(view, url) {
        
    }
}

