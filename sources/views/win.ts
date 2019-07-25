import {JetView} from "webix-jet";

export default class JetViewWindow extends JetView {

    showPopup() {
        (this.getRoot() as any).show();
    }

    hidePopup() {
        (this.getRoot() as any).hide();
    }

    config() {
        return {
            view: "window", position: "center", modal: true, close: true, move: true, resize: true, width: 300, height: 200,
            head: "Title",
            body: "body"
        };
    }
}