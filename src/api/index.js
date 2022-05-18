//请求的方法
import base from './base' //引入配置文件
import axios from 'axios' //引入axios
/*
    以下封装的函数一定要有return值！！

*/
const api = {
    getSearch(params){
       return axios.get(base.search,{
        params
       })
    }
}

export default api