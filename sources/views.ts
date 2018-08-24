export default {
    resolveviews
}

function resolveviews(page, urlstr) {
    if (page === "level1") {
        return import(/* webpackChunkName: "level1" */ "modules/level1/level1");
    } else if (urlstr.indexOf("level1") > 0 && urlstr.indexOf(page) > urlstr.indexOf("level1")) {
        return "modules/level1/views/" + page;
    }
    return page;
}

