/**
 * created by dtolife on 2018/2/10
 * http通用工具函数
 */
import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.10.101:9999';
axios.defaults.headers.common['Authorization'] = 'accessToken';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function requestApi(method, url, data, cb) {
    axios({
        method: method,
        url: url,
        data: data,
        
    }).then(res => {
        cb(res)
    }).catch(err => {
        console.log(err)
    })
}