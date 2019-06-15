import Axios from 'axios';
import { Message } from 'element-ui';

const $http = Axios;

const get = (url, params = {}) => {
    if (!url) return;
    return $http({
        method: 'get',
        url,
        data: params,
    }).then((response) => {
        console.log(response);
    }).catch((error)=> {
        console.log(error);
    })
}

const post = (url, params = {}) => {
    if (!url) return;
    return $http({
        method: 'post',
        url,
        data: params,
    }).then((response) => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}

export default{
    get,
    post,
}