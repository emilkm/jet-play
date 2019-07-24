import {JetView} from "webix-jet";
import JetViewPopup from "@root/views/pop";

export default class JetViewSystem extends JetView {
    private pop: JetViewPopup;

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
                { view: "button", value: "Popup", width: 300,
                    click: () => {
                        this.pop.showPopup(null, "", "Title");
                    }
                },
                {}
            ]
        };
    }

    init(view, url) {
        this.pop = this.ui(JetViewPopup) as JetViewPopup;
    }
}

