import {JetView, plugins} from "webix-jet";
import {IBaseConfig} from "webix-jet/dist/types/interfaces";

export default class JetViewModule2Page3 extends JetView {
    private cmenu: any;

    private cmv = { view: "contextmenu", localId: "cmenu",
        data: ["Page1", "Page2"],
        click: function(id) {
            let item: any = this.$context;
            this.$scope.app.show("page" + item.id);
        }
    };

    config() {
        return {
            rows: [
                { template: "Page3", height: 40 },
                { view: "datatable", localId: "datatable1", select: "row", gravity: 3,
                    columns: [
                        { id: "id", header: "id", width: 100 },
                        { id: "value", header: "value", width: 100 },
                        { id: "_cmenu_", header: "", template: "Click somewhere here for context menu navigation popup.", fillspace: true }
                    ],
                    on: {
                        onItemClick: function(id, e, node) {
                            if (id.column != "_cmenu_") {
                                return;
                            }
                            this.$scope.cmenu.$context = this.getItem(id);
                            this.$scope.cmenu.show(e);
                        }
                    },
                    data: [
                        { id: 1, value: "a" },
                        { id: 2, value: "b" }
                    ]
                },
                {}
            ]
        };
    }

    jump(id) {

    }

    init(view, url) {
        this.cmenu = this.ui(this.cmv as IBaseConfig);
    }

    ready(view, url) {

    }

    urlChange(view, url) {

    }

    destroy() {
        console.log("JetViewModule2Page3.destroy()");
        this.cmenu.$context = null;
        this.cmenu.destroy();
        this.cmenu = null;
    }

}