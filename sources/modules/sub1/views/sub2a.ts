import {JetView} from "@webix-jet/JetView";

export default class sub2 extends JetView {
    config() {
        return { type: "line", id: "sub2",
            rows: [
                { template: "sub 2a", height: 40 },
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