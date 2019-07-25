import {JetView} from "webix-jet";

export default class JetViewPopup extends JetView {
    private _note: any;
    private _promise: any;

    showPopup(node, note, title) {
        this._note = note;
        let form: any = this.$$("note:editor:form");
        if (this._note) {
            form.setValues({note: this._note});
        } else {
            form.setValues({});
        }
        if (title) {
            this.setTitle(title);
        }
        if (node) {
            (this.getRoot() as any).show(node);
        } else {
            (this.getRoot() as any).show();
        }
        (this.$$("txtNote") as any).focus();
        this._promise = webix.promise.defer();
        return this._promise;
    }

    hidePopup() {
        (this.getRoot() as any).hide();
        this.setTitle("Note Editor");
    }

    setTitle(title) {
        let root: any = this.getRoot();
        let head: any = root.getHead();
        let cell: any = head._cells[0];
        cell.define("template", title);
        cell.refresh();
    }

    config() {
        return {
            view: "window", position: "center", modal: true, close: true, move: true, resize: true, width: 300, height: 200,
            head: "Note Editor",
            body: {
                view: "form", localId: "note:editor:form",
                rows: [
                    { view: "text", localId: "txtNote", name: "note" },
                    {
                        cols: [
                            {},
                            {  view: "button", value: "Save", width: 80,
                                click: () => this.save()
                            }
                        ]
                    }
                ]
            },
            on: {
                onHide: () => {
                    this._promise.reject();
                    this._promise = null;
                }
            }
        }
    }

    init(view, url) {

    }

    ready(view, url) {

    }

    destroy() {
        this._note = null;
        this._promise = null;
    }

    save() {
        let form: any = this.$$("note:editor:form");
        let values: any = form.getValues();
        this._promise.resolve(values.note);
        this.hidePopup();
    }
}