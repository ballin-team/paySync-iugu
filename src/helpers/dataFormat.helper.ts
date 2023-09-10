export type SnakeToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}` ?
    `${T}${Capitalize<SnakeToCamelCase<U>>}` :
    S;

export type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}` ?
    `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}` :
    S;

export type SnakeToCamelCaseNested<T> = T extends object ? {
  [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>
} : T

export type CamelCaseToSnakeNested<T> = T extends object ? {
  [K in keyof T as CamelToSnakeCase<K & string>]: CamelCaseToSnakeNested<T[K]>
} : T

export const snakeToCamel = (str: string): string =>
  str.replace(/([_-][a-z])/gi, ($1: string) => $1.toUpperCase().replace('-', '').replace('_', ''));

export const camelToSnake = (str: string): string => str.replace(/([A-Z])/g, ($1: string) => `_${$1.toLowerCase()}`);

const isArray = function (
  input: Record<string, unknown> | Record<string, unknown>[] | unknown,
): input is Record<string, unknown>[] {
  return Array.isArray(input);
};

export const isObject = function (
  obj: Record<string, unknown> | Record<string, unknown>[] | unknown,
): obj is Record<string, unknown> {
  return !isValidDate(obj) && obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};

const isValidDate = (value: any) => value instanceof Date;

const modifyObjectKeys = function <T>(input: T, formatter: (word: string) => string): any {
  return (function recurse<K extends Record<string, unknown> | Record<string, unknown>[] | unknown>(input: K): K {
    if (isObject(input)) {
      return Object.keys(input).reduce(
        (acc, key) => Object.assign(acc, { [formatter(key)]: recurse(input[key]) }) as K,
        {} as any,
      );
    } else if (isArray(input)) {
      return input.map(i => recurse(i)) as K;
    }
    return input;
  })(input);
};

/**
 *
 * @param input Object to convert keys to camelCase
 * @returns Object with keys converted to camelCase
 */
export const toCamel = function <T>(input: T): SnakeToCamelCaseNested<T> {
  return modifyObjectKeys(input, snakeToCamel);
};

/**
 *
 * @param input Object to convert keys to snake_case
 * @returns Object with keys converted to snake_case
 */
export const toSnake = function <T>(input: T): CamelCaseToSnakeNested<T> {
  return modifyObjectKeys(input, camelToSnake);
};
