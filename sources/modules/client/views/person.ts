import {JetView} from "webix-jet";
import PersonDetail from "@root/modules/client/views/person-detail";
import PersonAddress from "@root/modules/client/views/person-address";
import PersonOther from "@root/modules/client/views/person-other";
import PersonExtra from "@root/modules/client/views/person-extra";


export default class Person extends JetView {

    private _cells: any[] = [
        { header: "Personal", body: PersonDetail },
        { header: "Address", body: PersonAddress },
        { header: "Other Stuff", body: PersonOther },
        { header: "Extra Stuff", body: PersonExtra }
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
                        { width: 300,
                            rows: [
                                { template: "Tree", height: 40 },
                                { view: "tree", localId: "person:tree", gravity: 9, select: true }
                            ]
                        },
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
}