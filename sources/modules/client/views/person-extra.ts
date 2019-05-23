import {JetView} from "webix-jet";


export default class PersonExtra extends JetView {

    config() {
        return {
            rows: [
                { template: "Extra stuff ...", height: 40 },
                {}
            ]
        };
    }

    ready(view, url){
        console.log("person-extra.ready()");
    }
}