import {IJetApp, IJetView} from "../interfaces";

function copyParams(view: IJetView, url, route){
	for (let i = 0; i < route.length; i++){
		view.setParam(route[i], url[i+1] ? url[i+1].page : "");
	}

}
export function UrlParam(app: IJetApp, view: IJetView, config: any){
	const route = config.route || config;
	view.on(app, "app:urlchange", function(subview, url){
		if (view === subview){
			copyParams(view, url, route);
			url.splice(1, route.length);
		}
	});
	view.on(app, "app:paramchange", function(subview, name, value, url){
		if (view === subview && url){
			for (let i=0; i<route.length; i++){
				if (route[i] === name){
					// changing in the url
					view.show([i, value]);
					return false;
				}
			}
		}
	});
	copyParams(view, view.getUrl(), route);
}
