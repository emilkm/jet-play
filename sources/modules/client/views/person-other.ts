import {JetView} from "webix-jet";


export default class PersonOther extends JetView {

    config() {
        return {
            rows: [
                { template: "Other stuff ...", height: 40 },
                {}
            ]
        };
    }

    ready(view, url){
        console.log('PersonOther JetView ready');
    }
}