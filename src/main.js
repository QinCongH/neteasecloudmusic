import Vue from 'vue'
import App from './App.vue'

// css
import './assets/css/common.css'
import './assets/css/screen.css'
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
