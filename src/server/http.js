// 用来二次封装axios
/**
 * 优点：
 *    1、更适合我们的需求（更灵活）
 *    2、自动帮助我们完成一些配置（开发成本降低）
 *    3、提供更多的服务
 *    4、可以按需引入到组件 
 *    5、http请求集中管理（偏向于工程化）
 * 思路：
 *    1、封装公共的路径等等
 *    2、封装请求拦截 （封装一些请求时，固定需要带到服务端的参数或者请求体）
 *    3、封装响应拦截  (服务端传递给前端数据，前端进行拦截处理之后再使用)
 */
import http from 'axios';
// 集成在axios中的
import qs from 'qs';
// 线上服务器路径
let prod_rul ='http://api.cms.liulongbin.top/api';
// let dev_rul = 'http://localhost:3001';
// 1 配置公共数据
// http.defaults.baseURL = 判断条件 ? prod_rul : dev_rul;
http.defaults.baseURL = prod_rul;
// 网络请求超时
http.defaults.timeout = 5000;

// http.interceptors.request.use(config =>{},error =>{})

// 2 配置请求拦截
http.interceptors.request.use(config =>{
    if(config.method == 'get' || config.method == 'put'){
        config.headers = {
            'Content-type':'application/json;charset=utf8'
        }
        // 将前端数据转成json字符串传递给服务端
        config.data = qs.stringify(config.data)
    }else if(config.method == 'post' || config.method == 'delete'){
        config.headers = {
            // 'token':JSON.parse(localStorage.getItem('token')),
            'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        }
        // 将前端数据转成json字符串传递给服务端
        config.data = qs.stringify(config.data)
    }
    return config;
},error =>{
// 此处是请求时 失败的错误  前端的错误
    const err = new Error(error);
    // throw 专门暴露错误的一个语法
    throw err;
});
// 3 配置响应拦截
http.interceptors.response.use(
    response =>{
        if(response.data.status == 200){
            console.log('响应成功') 
        }
        return response.data;
    },
    error =>{
        const err = new Error(error);
        // throw 专门暴露错误的一个语法
        throw err;
    }
);

export default http;



