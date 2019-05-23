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

    init(view, url) {
        console.log("person-address.init()");
    }

    ready(view, url) {
        console.log("person-address.ready()");
    }

    destroy() {
        console.log("person-address.destroy()");
    }
}