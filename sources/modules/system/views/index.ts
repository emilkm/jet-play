import {JetView} from "webix-jet";

export default class SystemJetView extends JetView {

    config() {
        return {
            rows: [
                {
                    cols: [
                        { template: "System module index", height: 40 },
                        {}
                    ]
                }
            ]
        };
    }

    init(view, url) {
        
    }
}

