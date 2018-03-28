import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import login from './modules/login'
import newsExam from './modules/newsExam'
// 个人中心设置
import person from './modules/person'

Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
	  actions,
	  getters,
	  modules: {
	    login,newsExam,person
	  }
})
