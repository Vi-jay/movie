import axios from 'axios';

/***
 * 如果token失效跳到首页
 * 会经过router拦截
 * 此时已把登录token删除 所以此时会被拦截去登录页
 */
/***
 * 初始化http请求拦截
 */
export function initHttpInterceptor(instance) {
  let isDoRedirect = false;

  instance.interceptors.request.use((v) => {
    return v;
  });
  instance.interceptors.response.use(
    async response => {
      if (response) {
        const {result,error={},code,message} = response.data;
        if (code === "-1"){
          localStorage.clear();
          return location.reload();
        }
        if (!result) {
          alert(error.message||message);
          throw new Error("请求错误");
        }
      }
      return response;
    },
    error => {
      if (error.response) {
        const {code, msg} = error.response.data;
        if (code !== 200) {
          alert("请求失败")
        }
      }
      return Promise.reject(error.response.data)
    });
}

/***
 * 如果没有登录则不能访问其他路由
 */
export function initRouterInterceptor(router) {
  router.beforeEach((from, to, next) => {
    const isLogin = localStorage.getItem("Authorization");
    if (!isLogin && !from.path.match(/login|register/)) {
      return next({path: "/login", query: from.query});
    }
    next();
  });
}
