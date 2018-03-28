import * as types from '../mutation-types'

// 应用初始状态
const state = {
}

// getters
const getters = {
		getCount: state => state.count
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