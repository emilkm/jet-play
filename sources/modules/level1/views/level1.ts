import {JetView} from "@webix-jet/JetView";

export default class level1 extends JetView {
    private _cells: any[] = [
        { header: "Level 2a", route: "level2a" },
        { header: "Level 2b", route: "level2b" }
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
        return { type: "line", id: "level1",
            rows: [
                { template: "level 1", height: 40 },
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
}