export default {
    resolveviews
}

function resolveviews(page) {
    if (page === "client") {
        return import(/* webpackChunkName: "client" */ "@modules/client/app");
    } else if (page === "system") {
        return import(/* webpackChunkName: "system" */ "@modules/system/app");
    }
    return page;
}

