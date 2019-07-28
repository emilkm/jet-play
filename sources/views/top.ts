import {JetView, plugins} from "webix-jet";

export default class JetViewTop extends JetView {
	config() {
		return { type: "line",
            rows: [
				{ type: "header", css: "webix_dark", template: "top", localId: "top" },
				{ view: "menu", localId: "menu", data: [
						{ id: "module1", value: "Module1" },
						{ id: "module2", value: "Module2" }
					],
					on: {
						onItemClick: (id, e) => {
							this.show(id);
						}
					}
				},
				{ padding: 5,
                    rows: [
                    	{ $subview: true }
                    ]
				}
			]
		};
	}

	init() {
		this.use(plugins.Menu, "menu");
	}
}