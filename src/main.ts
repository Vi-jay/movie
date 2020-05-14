import Vue from 'vue'
import "lodash";
import App from './App.vue'
import Vant from 'vant'
import router from './router'
import store from './store'
import PluginMixin from "@/plugins/common";
import DirectivesMixin from "@/plugins/directives";
import FiltersMixin from "@/plugins/filters";
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(PluginMixin);
Vue.use(DirectivesMixin);
Vue.use(FiltersMixin);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    router, store,
    render: h => h(App)
}).$mount('#app')
