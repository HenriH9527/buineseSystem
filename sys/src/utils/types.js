/**
 * @description 获取对象具体类型
 * @param {any} 任意 js 对象
 * @returns {String} 具体类型小写字符串
 */
export const getType = obj => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

// 判断是否为 Boolean 类型
export const isBoolean = obj => getType(obj) === 'boolean';

// 判断是否为 null 类型
export const isNull = obj => getType(obj) === 'null';

// 判断是否为 Undefined
export const isUndefined = obj => getType(obj) === 'undefined';

// 判断是否为 Number
export const isNumber = obj => getType(obj) === 'number';

// 判断是否为 Undefined
export const isString = obj => getType(obj) === 'string';

// 判断是否为 Symbol
export const isSymbol = obj => getType(obj) === 'symbol';

// 判断是否为 Array
export const isArray = obj => getType(obj) === 'array';

// 判断是否为 Function
export const isFunction = obj => getType(obj) === 'function';

// 判断是否为 RegExp
export const isRegExp = obj => getType(obj) === 'regexp';

// 判断是否为 Date
export const isDate = obj => getType(obj) === 'date';

// 判断是否为 Map
export const isMap = obj => getType(obj) === 'map';

// 判断是否为 Set
export const isSet = obj => getType(obj) === 'set';

// 判断是否为 Error
export const isError = obj => getType(obj) === 'error';
