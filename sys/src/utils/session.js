//session 操作

// 设置session
const setItem = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));

//获取session
const getItem = key => JSON.parse(sessionStorage.getItem(key));

//移除session
const removeItem = key => sessionStorage.removeItem(key);

//移除所有session
const clear = () => sessionStorage.clear();


export default {
    setItem,
    getItem,
    removeItem,
    clear,
}