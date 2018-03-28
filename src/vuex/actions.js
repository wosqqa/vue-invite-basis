import * as types from './mutation-types'

//写一些公共actions
//组件使用mutations的函数。
export const increment = ({commit}) => {
    commit(types.INCREMENT)
}
