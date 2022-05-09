import Vue from 'vue'
import App from './App.vue'
import router from './router'  //路由
// css
import './assets/css/common.css'
import './assets/css/screen.css'
import './assets/css/style.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
