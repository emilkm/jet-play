import {JetView} from "@webix-jet/JetView";

export default class level1 extends JetView {
    private _cells: any[] = [
        { header: "Sub 2a", route: "sub2a?id=2a" },
        { header: "Sub 2b", route: "sub2b?id=2b" }
    ];

    getCellHeaders() {
        let headers: any[] = [];
        let cell: any;
        for (cell of this._cells) {
            headers.push(cell.header);
        }
        return headers;
    }

    getCell(header) {
        let cell: any;
        for (cell of this._cells) {
            if (cell.header == header) {
                return cell;
            }
        }
    }

    config() {
        return { type: "line", id: "sub1",
            rows: [
                { template: "sub 1", height: 40 },
                {
                    cols: [
                        { view: "list", data: this.getCellHeaders(), width: 200, select: true, scroll: false,
                            on: {
                                onAfterSelect: (header) => {
                                    let cell = this.getCell(header);
                                    if (cell.route) {
                                        this.show(cell.route);
                                    }
                                }
                            }
                        },
                        { $subview: true }
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