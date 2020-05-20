import {RawLocation} from "vue-router";
import {DeepFlatten} from "@/utils/tshelper";
import {Vue} from "vue/types/vue";
import { randomStr} from "@/utils";

const mixin = {
    computed:{
        randomPic:{
            cache:true,
            get() {
                console.log(3)
                const random = randomStr();
                return `https://img.xjh.me/random_img.php?return=302&${random}`;
            }
        }
    },
    methods: {
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
