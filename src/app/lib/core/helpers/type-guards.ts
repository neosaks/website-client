export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isFunction(value: unknown): value is () => unknown {
  return typeof value === 'function';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}
