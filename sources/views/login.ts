import {JetView} from "webix-jet";

export default class JetViewLogin extends JetView {
    config(){
        const login_form = {
            view:"form", localId:"login:form",
            width:400, borderless:false, margin:10,
            rows:[
                { type:"header", template: this.app.config.name },
                { view:"button", value:"Login", click:() => this.do_login(), hotkey:"enter" }
            ]
        };

        return {
            cols:[{}, { rows:[{}, login_form, {}]}, {}]
        };
    }

    init(view) {

    }

    destroy() {
        console.log("JetViewLogin.destroy()")
    }

    do_login(){
        const user = this.app.getService("user");
        const form: any = this.$$("login:form");

        if (form.validate()){
            const data = form.getValues();
            user.login().catch(function() {
                webix.alert("login error");
            });
        }
    }
}