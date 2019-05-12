import {JetView} from "webix-jet";

export default class TopView extends JetView {
	config() {
		return { type: "line",
            rows: [
				{ type:"header", css:"webix_dark", template: "top", localId: "top" },
				{ padding: 5,
                    rows: [
                    	{ $subview: true }
                    ]
				}
			]
		};
	}

	init(){
		this.on(this.app, "TitleChange", (name) => {
			(this.$$("top") as webix.ui.template).setHTML(name);
		})
	}
}