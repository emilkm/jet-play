import {JetView} from "webix-jet";


export default class PersonDetail extends JetView {

    config() {
        return {
            rows: [
                { template: "Personal info ...", height: 40 },
                {
                    view: "form", localId: "person:detail:form", borderless: true, elementsConfig: {labelWidth: 120},
                    rows: [
                        { view: "text", localId: "id", name: "id", label: "id" },
                        { view: "text", localId: "value", name: "value", label: "value" },
                        { view: "button", label: "back to person-search (unbind form by hand)",
                            click: () => {
                                const frm: any = this.$$("person:detail:form");
                                //this will unbind the form on demand
                                frm.unbind();
                                this.show("/index/person-search");
                            }
                        },
                        { view: "button", label: "back to person-search (leave form unbind to destructor)",
                            click: () => {
                                this.show("/index/person-search");
                            }
                        },
                        {}
                    ]
                }
            ]
        };
    }


    init(view, url) {
        console.log("person-detail.init()");
        const self = this;

    }

    ready(view, url) {
        console.log("person-detail.ready() bind the form");
        const self = this;

        const dc = this.app.getService("dataset");
        const frm: any = this.$$("person:detail:form");
        frm.bind(dc);

    }

    destroy() {
        console.log("person-detail.destroy()");
        const frm: any = this.$$("person:detail:form");
        //unbind here will do nothing because this._bind_source == null (webix calls unbind as it destroys views internally)
        frm.unbind();
    }
}