import axios from 'axios'

// create an axios instance 
const service = axios.create({
    baseURL: "" || process.env.BASE_API, // url = base url + request url
    timeout: 30000 // request timeout
})
// let token = getToken()
// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// response interceptor
service.interceptors.response.use(
    response => {
        if (response.status !== 200) {
            alert('状态码 不是200')

            return Promise.reject(new Error(response || 'Error'))
        } else {

            return response.data
        }
    },
    error => {
        alert('请求报错')
        return response
        // return Promise.reject(error)
    }
)

export default service
