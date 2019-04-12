export default {
    resolveviews
}

function resolveviews(page) {
    if (page === "client") {
        return import(/* webpackChunkName: "client" */ "@modules/client/app");
    }
    return page;
}

