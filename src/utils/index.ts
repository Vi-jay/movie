import dayjs from "dayjs";
import {Vue} from "vue/types/vue";

export function getSetWrapper(realName) {
    return {
        get() {
            return this[realName];
        },
        set(this: Vue, val) {
            this.$emit(`update:${realName}`, val)
        }
    }
}
export function getPic() {
    return "https://img.xjh.me/random_img.php?return=302";
}
/***
 * 转换请求时参数中的Date对象
 * @param data
 * @returns {*}
 */
export function convertRequestDate(data) {
    const newObj = _.cloneDeep(data);
    function closure(obj) {
        _.each(obj, (v, k) => {
            if (!_.isDate(v) && _.isObject(v)) return closure(v);
            if (!_.isDate(v)) return;
            obj[k] = dayjs(v).format("YYYY-MM-DD HH:mm:ss")
        });
        return newObj;
    }
    return closure(newObj);
}
export function excludeEmpty(obj, ...keys) {
    return _.reduce(obj, (map, v, k) => {
        if (keys.includes(k) || (!_.isNumber(v) && _.isEmpty(v))) return map;
        if (_.isPlainObject(v)) {
            map[k] = excludeEmpty(v);
        } else {
            map[k] = v;
        }
        return map;
    }, {});
}
export function randomStr() {
    return Math.random().toString(16).substr(2)
}
export function genFormOptions(labels: string[], addition = 0) {
    return {options: labels.map((label, idx) => ({label, value: idx + addition}))}
}
export function genSimpleFormOptions(labels: string[]) {
    return {options: labels.map((label, idx) => ({label, value: label}))}
}
