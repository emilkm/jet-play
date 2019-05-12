import {JetView} from "webix-jet";

export default class OrganisationSearch extends JetView {
    config() {
        return { type: "line",
            rows: [
               { template: "Organisation Search", height: 40 },
                { padding: 5,
                    rows: [
                        { template: "organisation search result ..." }
                    ]
                }
            ]
        };
    }

    init(){
        this.app.callEvent("TitleChange", ["Org search"]);
    }

    urlChange(view, url){
        if (url[0].params.id){
            console.log(url[0].params.id);
        }
    }
}