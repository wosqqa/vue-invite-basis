import axios from 'axios'
import routes from '../routes'
import store from '../vuex/store'
var qs = require('qs')// qs.stringify(params)对提交json参数格式化a=212&b=2332的格式
// 改变下路由地址base
// let base = 'http://172.18.250.87:4633/rongmeitiapi'
let base = '/rongmeitiapi'
//静态变量

var localHref = window.location.href;//判断正式测试参数
let live,alibucket,bucketXg,bucketTy;
if(localHref.indexOf('http://localhost:8081/')>-1 || localHref.indexOf('http://172.18.250.87:8800/')>-1){
  alibucket='gxtest00';
  bucketXg='gxtest';
  bucketTy='gxtest';
  live=1;
}else{
  alibucket='gaoxinmv';
  bucketXg='gaoxinmv';
  bucketTy='gaoxinmv';
  live=0;
}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true;
  // 超时时间
axios.defaults.timeout = 50000
	  // http请求拦截器
	axios.interceptors.request.use(config => {
	  config.headers={
	  	'Content-Type':'application/x-www-form-urlencoded'
	  }
	  return config
	}, error => {
	  return Promise.reject(error)
	})
	  // http响应拦截器
	axios.interceptors.response.use(data => { // 响应成功关闭loading
	  if (data.data.code == '00044') {
	    window.location.href = '/login'
	  }
	  return data
	}, error => {
	  return Promise.reject(error)
	})

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//var instance = axios.create({//测试跨域
//baseURL: 'http://some-domain.com/api/',
//timeout: 5000,
//headers:{
//  'Content-Type':'application/x-www-form-urlencoded'
//	},
//	transformRequest: [function (data) {
//	    data = qs.stringify(data);
//	    return data;
//	}],
//	withCredentials:true   //加了这段就可以跨域了
//headers: {'X-Custom-Header': 'foobar',"Access-Control-Allow-Methods":"GET,POST"}
//})

//获取显示首页公告
export const getSystemNotificationByTime = params => {
  return axios.get(`${base}/systemNotification/getSystemNotificationByTime`).then(res => res.data)
}
export const insertSystemNotification = params => {
  let param = {json: JSON.stringify(params)}
  return axios.post(`${base}/systemNotification/insertSystemNotification`, qs.stringify(param)).then(res => res.data)
}
export const deleteNotification = params => {
  let param = {json: JSON.stringify(params)}
  return axios.post(`${base}/systemNotification/updateSystemNotificationStatusById`, qs.stringify(param)).then(res => res.data)
}
