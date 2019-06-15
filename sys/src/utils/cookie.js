import Cookie from 'js-cookie';

/**
 * 存入cookie
 * @param {*} tokenyKey 存入的key
 * @param {*} tokenValue 存入的 value
 * @param {*} minute 存入的失效时间，单位为分钟，默认失效时间为30分钟
 */

 export const setToken = ( tokenKey, tokenValue, minute = 30 ) => {
     Cookie.set(tokenKey, tokenValue, {expires: (minute / 24 / 60)});
 }

 /**
  * 获取Cookie里的value值
  * @param {*} tokenKey 存入的key
  * 
  */

  export const getToken = tokenKey => Cookie.get(tokenKey);

  /**
   * 删除Cookie里的值
   * @param {*} tokenKey 存入的key
   * 
   */

   export const removeToken = tokenKey => Cookie.remove(tokenKey);