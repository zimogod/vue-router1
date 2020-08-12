import Vue from 'vue'
import App from './App.vue'
// 引入
import router from './router1';
import http from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.prototype.$http = http;
Vue.config.productionTip = false
// cnpm i vue-router 
Vue.use(Vant);
new Vue({
  el:'#app',
  // 挂载到vue实例上去
  router,
  render: h => h(App),
})
/**
let router = new VueRouter({
  mode:'',
  base:'',
  routes
})
switch (mode) {
  case 'history':
    this.history = new HTML5History(this, options.base)
    break
  case 'hash':
    this.history = new HashHistory(this, options.base, this.fallback)
    break
  case 'abstract':
    this.history = new AbstractHistory(this, options.base)
    break
  default:
    if (process.env.NODE_ENV !== 'production') {
      assert(false, `invalid mode: ${mode}`)
    }
}
 */

 /**
  * 
  * this.$router.push()的原理：
  * 
  * 1、$router.push() //调用方法

    2 HashHistory.push() //根据hash模式调用,设置hash并添加到浏览器历史记录（添加到栈顶）（window.location.hash= XXX）

    3 History.transitionTo() //监测更新，更新则调用History.updateRoute()

    4 let route = History.updateRoute() //更新路由

    5 {Vue._route= route} //替换当前app路由  app：当前的vue实例

    6 vm.render() //更新视图
  */
/**
  1、调用了vue-router里面的this.$router.push()方法
  2、第一步触发了浏览器中History对象中的push()方法
  3、第二步触发了History对象中的transitionTo()方法，检测路由变化的函数
  4、第三步触发了History对象中的updateRoute()方法，更新路由,路径已经跳转了 
  5、Vue.$router = updateRoute()
  6、Vue.render()   render()渲染、更新页面的
*/



