import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        a: 1
    },
    mutations: {
        UPDATE_A(state, data) {
            state.a = data;
        }
    }
});
