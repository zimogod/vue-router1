import Vue from 'vue'
import App from './App.vue'
// 引入
import router from './router';
Vue.config.productionTip = false
// cnpm i vue-router 
new Vue({
  el:'#app',
  // 挂载到vue实例上去
  router,
  render: h => h(App),
})
