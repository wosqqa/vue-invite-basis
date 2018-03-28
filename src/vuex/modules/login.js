import * as types from '../mutation-types'

// 应用初始状态
const state = {
    count: 10,
    login:false,
    targetName:'21辅导费',
    authorList:'',
}

// getters
const getters = {
		getCount: state => state.count,
		getTargetName: state => state.targetName,
		getAuthorList: state => state.authorList
}

// actions
const actions = {
	decrement : ({commit}) => commit(types.DECREMENT),
	setTargetName:({commit}) => commit('setTargetName'),
	setAuthorList:({commit}) => commit('setAuthorList'),
}

// 定义所需的 mutations
const mutations = {
    [types.INCREMENT](state) {
        state.count++
    },
    [types.DECREMENT](state) { 
        state.count--
    },
    setCount(state,n){
    	state.count=state.count+n;
    },
    setTargetName(state,payload){
    	state.targetName=payload.name;
    },
    setAuthorList(state,payload){
    	state.authorList=payload.authorList;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}