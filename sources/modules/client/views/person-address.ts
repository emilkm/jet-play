import {JetView} from "webix-jet";


export default class PersonAddress extends JetView {

    config() {
        return {
            rows: [
                { template: "Address info ...", height: 40 },
                {}
            ]
        };
    }

    ready(view, url){
        console.log('PersonAddress JetView ready');
    }
}