import {JetView} from "@webix-jet/JetView";

export default class level1 extends JetView {
    config() {
        return { type: "line", id: "level1",
            rows: [
                { template: "level 1", height: 40 },
                { padding: 5,
                    rows: [ { $subview: true } ]
                }
            ]
        };
    }
}