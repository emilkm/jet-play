export default {
    resolveviews
}

function resolveviews(page) {
    if (page === "module1") {
        return import(/* webpackChunkName: "module1" */ "@root/modules/module1/app");
    } else if (page === "module2") {
        return import(/* webpackChunkName: "module2" */ "@root/modules/module2/app");
    }
    return page;
}

