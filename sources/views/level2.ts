import {JetView} from "@webix-jet/JetView";

export default class level2 extends JetView {
    config() {
        return { type: "line", id: "level2",
            rows: [
                { template: "level 2", height: 40 },
                { padding: 5,
                    rows: [
                        { template: "stop here for now" }
                    ]
                }
            ]
        };
    }
}