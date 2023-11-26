function isNumber (value: unknown): value is number {
    return typeof value === "number";
};

function isString (value: unknown): value is string {
    return typeof value === "string";
};

function isBoolen (value: unknown): value is boolean {
    return typeof value === "boolean";
};

function isObject (value: unknown): value is object {
    return typeof value === "object";
};

function isUndefined (value: unknown): value is undefined {
    return typeof value === "undefined";
};

function isNull (value: unknown): value is null {
    return typeof value === null;
};

function isBigint (value: unknown): value is bigint {
    return typeof value === "bigint";
};

function isSymbol (value: unknown): value is symbol {
    return typeof value === "symbol";
};

export { isBigint, isBoolen, isNull, isNumber, isString, isObject, isSymbol, isUndefined }