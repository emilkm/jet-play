import {JetView} from "webix-jet";

export default class JetViewClient extends JetView {

    config() {
        return {
            rows: [
                { template: "Client module index", height: 40 },
                { view: "button", value: "System via this app show()", width: 300,
                    click: () => {
                        this.show("/top/system");
                    }
                },
                { view: "button", value: "System via this app show() #!", width: 300,
                    click: () => {
                        this.show("#!/top/system");
                    }
                },
                { view: "button", value: "System via root app show()", width: 300,
                    click: () => {
                        let root: any = this.app.app;
                        root.show("/top/system");
                    }
                },
                {}
            ]
        };
    }

    init(view, url) {
        console.log("client-index.init()");
    }
}

