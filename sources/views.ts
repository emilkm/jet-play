export default {
    resolveviews
}

function resolveviews(page) {
    if (page === "level1") {
        return import(/* webpackChunkName: "level1" */ "modules/level1/app");
    }
    return page;
}

