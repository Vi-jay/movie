import {DeepFlatten} from "@/utils/tshelper";
import {Vue} from "vue/types/vue";

const mixin = {
    filters: {},
};

export default function FiltersPlugin(Vue) {
    return Vue.mixin(mixin)
}

const mixinData = {...mixin};
type FiltersMixinType = DeepFlatten<typeof mixinData>;

export {FiltersMixinType}
