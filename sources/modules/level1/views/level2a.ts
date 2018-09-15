import {JetView} from "@webix-jet/JetView";

export default class level2 extends JetView {
    config() {
        return { type: "line", id: "level2",
            rows: [
                { template: "level 2a", height: 40 },
                { padding: 5,
                    rows: [
                        { template: "aaa" }
                    ]
                }
            ]
        };
    }

    urlChange(view, url){
        if (url[0].params.id){
            console.log(url[0].params.id);
        }
    }
}