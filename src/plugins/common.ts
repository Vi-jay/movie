import {RawLocation} from "vue-router";
import {DeepFlatten} from "@/utils/tshelper";
import {Vue} from "vue/types/vue";
import {getPic} from "@/utils";

const mixin = {
    methods: {
        getPic,
        hasModifier(defaultClass, modifier, flag) {
            return flag ? `${defaultClass} ${defaultClass}--${modifier}` : defaultClass
        },
        $replaceRoute(this: Vue, route: RawLocation) {
            return this.$router.replace(route);
        },
        $popRoute(this: Vue) {
            this.$router.go(-1);
        },
        $pushRoute(this: Vue, route: RawLocation) {
            return this.$router.push(route);
        },
        windowReload() {
            window.location.reload();
        },
    },
};

export default function CommonPlugin(Vue) {
    return Vue.mixin(mixin)
}

const mixinData = {...mixin};
type CommonMixinType = DeepFlatten<typeof mixinData>;

export {CommonMixinType}
