import http from './http';
// 专门写details组件的请求接口
export const detailsApi = {
    getToken:() => http.get('/getToken'),
    getNewsList:() => http.get('/getnewslist'),
    getPageData:(num) => http.get(`/page?page=${num}`),
    getTiger:() => http.get('/tableData')
}

// 专门写homepage组件的请求接口
// export const homepageApi = {
//     getNewsList:() =>{
//         return http.get('/getnewslist');
//     },
//     getPageData:(num) =>{
//         return http.get(`http://localhost:3001/page?page=${num}`)
//     }
// }


// export const getNewsList = () =>{
//     return http.get('/getnewslist');
// }

// export const getPageData = (num) =>{
//     return http.get(`http://localhost:3001/page?page=${num}`)
// }