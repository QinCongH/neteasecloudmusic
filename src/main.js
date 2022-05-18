import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由
import api from './api/index' //引入
// css
import './assets/css/common.css'
import './assets/css/screen.css'
import './assets/css/style.css'
import 'swiper/css/swiper.min.css'
import 'element-ui/lib/theme-chalk/index.css';
//局部引入element
import {
  Row,
  Col
} from 'element-ui';
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$api = api //安装$api
  }
}).$mount('#app')