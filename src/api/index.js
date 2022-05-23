//请求的方法
import base from './base' //引入配置文件
import axios from 'axios' //引入axios
/*
    以下封装的函数一定要有return值！！
*/
const api = {
    // 搜索音乐
    getSearch(params){
       return axios.get(base.search,{
        params
       })
    },
    //推荐歌单
    songRecommend(params){
        return axios.get(base.personalized,{
            params
        })
    },
    //首页发现信息
    getHomeMessage(){
        return axios.get(base.homeMessage);
    }
}

export default api