import {JetView} from "webix-jet";


export default class PersonDetail extends JetView {

    config() {
        return {
            rows: [
                { template: "Personal info ...", height: 40 },
                {}
            ]
        };
    }

    ready(view, url){
        console.log('PersonDetail JetView ready');
    }
}