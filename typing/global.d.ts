declare const _: _.LoDashStatic;

interface RequireCtx {
    keys(): string[],
    (key: string): any
}

interface NodeRequire {
    context(directory: string, useSubdirectories: boolean, regExp: RegExp): RequireCtx,
    ensure: any
}
