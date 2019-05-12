import {JetView} from "webix-jet";

export default class PersonSearch extends JetView {
    config() {
        return { type: "line",
            rows: [
                { template: "Person Search", height: 40 },
                { padding: 5,
                    rows: [
                        { template: "person search result ..." }
                    ]
                }
            ]
        };
    }

    init(){
        this.app.callEvent("TitleChange", ["Person search"]);
    }

    urlChange(view, url){
        if (url[0].params.id){
            console.log(url[0].params.id);
        }
    }
}