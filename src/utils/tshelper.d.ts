type NonObjectKeysOf<T> = {
    [K in keyof T]: T[K] extends Array<any> ? K : T[K] extends object ? never : K
}[keyof T];

type ValuesOf<T> = T[keyof T];
type ObjectValuesOf<T extends Object> = Exclude<Exclude<Extract<ValuesOf<T>, object>, never>,
    Array<any>>;

type UnionToIntersection<U> = (U extends any
    ? (k: U) => void
    : never) extends ((k: infer I) => void)
    ? I
    : never;
type DFBase<T, Recursor> = Pick<T, NonObjectKeysOf<T>> &
    UnionToIntersection<Recursor>;
export type DeepFlatten<T> = T extends any ? DFBase<T,ObjectValuesOf<T>> : never;

//想扁平几层就套几层
export type DeepFlatten2<T> = T extends any ? DFBase<T,DF2<T>> : never;
type DF2<T> = T extends any ? DFBase<T, DF3<T>> : never;
type DF3<T> = T extends any ? DFBase<T, ObjectValuesOf<T>> : never;
