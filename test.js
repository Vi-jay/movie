function chunk(arr, size) {
    const chunkLen = Math.ceil(arr.length / size);
    return Array.from({length: chunkLen}, (__, idx) => arr.slice(idx * size, (idx + 1) * size))
}

function difference(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item))
}

function dropRight(arr, n = 1) {
    return arr.slice(0, -n)
}

function flattenDepth(arr, depth = Infinity) {
    return arr.reduce((collection, item) => collection.concat(Array.isArray(item) && depth > 1 ? flattenDepth(item, --depth) : item), [])
}

function intersection(first, ...rest) {
    return first.filter((item) => rest.every((arr) => arr.includes(item)))
}

function midSort(arr) {
    const mid = arr.sort((p, c) => p - c)[Math.floor(arr.length / 2)];
    return arr.sort((item) => item - mid)
}

function uniq(arr) {
    return arr.reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item), [])
}

function xor(...arrs) {
    return arrs.reduce((acc, arr, idx) => {
        const rest = arrs.filter((item) => item !== arr);
        const xors = arr.filter((item) => rest.every((rArr) => !rArr.includes(item)))
        return acc.concat(xors);
    }, [])
}

function groupBy(arr, key) {
    return Object.fromEntries(arr.reduce((map, item) => (map.has(item[key]) ?
        map.get(item[key]).push(item) :
        map.set(item[key], [item]), map), new Map()).entries())
}

function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function shuffle([...arr]) {
    for (let i = 0; i < arr.length; i++) {
        const randomIdx = Math.floor(Math.random() * arr.length);
        [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
    }
    return arr;
}

function after(n, fn) {
    return function () {
        if (--n) return;
        fn.apply(this, arguments)
    }
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, max), min)
}

function inRange(num, min, max) {
    return num > min && num < max
}

function calculateUrl(item, DataManage, appCode, path, name) {
    if (!item || typeof DataManage !== "object" || !DataManage.hasOwnProperty("getCurrentAppCode")) return null;
    const getServerUrl = () => item.serverUrl ? item.serverUrl : DataManage.getCurrentAppCode();
    const appendAppCode = (url) => appCode !== path ? `/${url}/#/${appCode}` : '';
    const appendPath = (url) => path.startsWith('http') ? path : `${url}${path}`;
    const appendName = (url) => path ? url : `/${appCode}/${name}`;
    const appendCollection = [appendAppCode,appendPath,appendName];
    return appendCollection.reduce((url,appendFn)=>appendFn(url),getServerUrl())
}

