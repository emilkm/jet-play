import {JetView} from "webix-jet";
import PersonDetail from "@root/modules/client/views/person-detail";
//import PersonAddress from "@root/modules/client/views/person-address";
//import PersonOther from "@root/modules/client/views/person-other";
//import PersonExtra from "@root/modules/client/views/person-extra";


export default class Person extends JetView {

    private _cells: any[] = [
        { header: "Personal", body: PersonDetail },
        //{ header: "Address", body: PersonAddress },
        //{ header: "Other Stuff", body: PersonOther },
        //{ header: "Extra Stuff", body: PersonExtra }
    ];

    getCells() {
        let cells: any[] = [];
        let cell: any;
        for (cell of this._cells) {
            cells.push(cell);
        }
        return cells;
    }

    config() {
        return {
            rows: [
                { gravity: 9,
                    cols: [
                        /*{ width: 300,
                            rows: [
                                { template: "Tree", height: 40 },
                                { view: "tree", localId: "person:tree", gravity: 9, select: true }
                            ]
                        },*/
                        { gravity: 9,
                            rows: [
                                { template: "Detail", height: 40 },
                                { view: "tabview", gravity: 9, cells: this.getCells() }
                            ]
                        }

                    ]
                }
            ]
        };
    }

    init(view, url) {
        console.log("person.init()");

        //service is a webix.DataCollection set in index.ts
        const dc: any = this.app.getService("dataset");
        if (dc) {
            //simulate data load
            dc.clearAll();
            dc.add({id: 1, value: 'a'});
            dc.setCursor(1);
        }

    }

    ready(view, url) {
        console.log("person.ready()");
    }

    destroy() {
        console.log("person.destroy() unbinds children internally");
    }
}