import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'

//注释后不调用mock模拟数据
/***********************/
//import Mock from './mock'
//Mock.bootstrap();
/**********************/
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueRouter)
Vue.use(Vuex)


const router = new VueRouter({
	mode: 'history',//去除#号
    routes: routes
})
// var control = true;
router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user'));
    if(user && to.path == '/'){
      next({ path: '/main' })
    }else{
      next()
    }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
