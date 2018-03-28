import * as types from '../mutation-types'

// 应用初始状态
const state = {
	newExamList:[],
	newExamListNum:0,
}

// getters
const getters = {
		getExamList: state => state.newExamList
}

// actions
const actions = {
	decrement : ({commit}) => commit(types.DECREMENT)
}

// 定义所需的 mutations
const mutations = {
    [types.INCREMENT](state) {
        state.count++
    },
    [types.DECREMENT](state) {
        state.count--
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}