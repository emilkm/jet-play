import routie from "webix-routie/lib/routie";

import {IJetRouter, IJetRouterCallback, IJetRouterOptions} from "../interfaces";



export class SubappRouter implements IJetRouter{
    private config:any;
    private _prefix:string;
    private root: string;
	private path: string;
    private cb: IJetRouterCallback;

	constructor(cb: IJetRouterCallback, config:any){
        this.config = config || {};
		this._prefix = this.config.routerPrefix;

		// use "#!" for backward compatibility
		if (typeof this._prefix === "undefined"){
			this._prefix = "!";
		}
        
        this.root = this.config.root;
		if (typeof this.root === "undefined"){
			this.root = "";
		}
        
        this.path = "";
        this.cb = cb;
	}
	set(path:string, config?:IJetRouterOptions){
		this.path = path;
		if (!config || !config.silent){
			setTimeout(() => this.cb(path), 1);
		}

        let hash = window.location.hash || "";
		let rpat = "#" + this._prefix + this.root + this.path;
        console.log("hash=" + hash + " | rpat=" + rpat);
        (routie as any).navigate(rpat, {silent:true});
	}
	get(){
        return this.path;
	}

}