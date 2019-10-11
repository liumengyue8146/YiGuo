import axios from 'axios'
import store from '@/store'
//import { getToken } from '@/utils/auth'

// create an axios instance
const instance = axios.create({
    baseURL: 'http://192.168.15.33:3000', //process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor 请求拦截
// instance.interceptors.request.use(
//     config => {
//         // do something before request is sent
//         if (store.getters.token) {
//             // config.headers['X-Token'] = getToken() jwt的要求，在请求头中添加authorization
//             config.headers['authorization'] = 'bearer ' + getToken()
//         }
//         return config
//     },
//     error => {
//         // do something with request error
//         console.log(error) // for debug

//         return Promise.reject(error)
//     }
// )

// response interceptor  响应拦截
// instance.interceptors.response.use(

//     response => {
//         const res = response.data
//             // if the custom code is not 20000, it is judged as an error.
//         if (res.code === 'error') {
//             Message({
//                 message: res.message || 'Error',
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//         } else {
//             return res
//         }
//     },
//     error => {
//         console.log('err' + error) // for debug
//         Message({
//             message: error.message,
//             type: 'error',
//             duration: 5 * 1000
//         })
//         return Promise.reject(error)
//     }
// )

export function get(url, config) {
    if (url.startsWith('http')) {
        return axios.get(url, config)
    } else {
        return instance.get(url, config)
    }
}

export function post(url, data, config) {
    return instance.post(url, data, config)
}

export function update(url, data, config) {
    return instance.put(url, data, config)
}

export function remove(url, config) {
    return instance.delete(url, config)
}

// service就是axios的一个实例，我们用instance来代替
// export default service