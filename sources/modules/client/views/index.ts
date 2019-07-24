import {JetView} from "webix-jet";

export default class ClientJetView extends JetView {

    config() {
        return {
            rows: [
                {
                    cols: [
                        { template: "Client module index", height: 40 },
                        {}
                    ]
                }
            ]
        };
    }

    init(view, url) {
        console.log("client-index.init()");
    }
}

