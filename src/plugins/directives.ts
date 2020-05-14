import {DeepFlatten} from "@/utils/tshelper";
import {Vue} from "vue/types/vue";

const mixin = {
    directives: {

    },
};

export default function DirectivesPlugin(Vue) {
    return Vue.mixin(mixin)
}

const mixinData = {...mixin};
type DirectivesMixinType = DeepFlatten<typeof mixinData>;

export {DirectivesMixinType}
