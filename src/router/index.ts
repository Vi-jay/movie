import Vue from 'vue'
import Router from 'vue-router'
import RouterContainer from "@/components/layout/RouteContainer.vue"
import {initRouterInterceptor} from "@/interceptor";

Vue.use(Router);
const componentCtx = require.context("@/pages", true, /\.vue$/);
const viewPaths = componentCtx.keys();
const ROUTER_CHILDREN = viewPaths.map((path) => {
    const viewModule = componentCtx(path);
    const {meta} = viewModule.default;
    return {
        path: path.replace(/\.\/(.*)\.vue$/g, "$1"),
        component: r => r(viewModule), meta
    };
});
const router =  new Router({
    routes: [
        {
            path: '/',
            redirect:ROUTER_CHILDREN[0].path,
            component:RouterContainer,
            children: ROUTER_CHILDREN
        },
    ]
});
initRouterInterceptor(router);
export default router;
