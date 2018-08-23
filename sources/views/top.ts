import {JetView} from "@webix-jet/index";

export default class TopView extends JetView {
	config() {
		return { type: "line", id: "top",
            rows: [
				{ template: "top", height: 40 },
				{ padding: 5,
                    rows: [ { $subview: true } ]
				}
			]
		};
	}
}