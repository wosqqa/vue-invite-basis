// 应用初始状态
const state = {
    auditFontSize: localStorage.getItem('auditFontSize')?localStorage.getItem('auditFontSize'):16,
    auditLineHeight: localStorage.getItem('auditLineHeight')?localStorage.getItem('auditLineHeight'):20,
    tableColumnShow: localStorage.getItem('tableColumn')?Number(localStorage.getItem('tableColumn')):1,
    tableRowShow: localStorage.getItem('tableRow')?Number(localStorage.getItem('tableRow')):10
}

// mutations
const mutations = {
    SET_AUDIT_FONTSIZE(state,fontsize){
        state.auditFontSize = fontsize
    },
    SET_AUDIT_LINEHEIGHT(state,lineheight){
        state.auditLineHeight = lineheight
    },
    SET_TABLE_COLUMN(state,tablecolumn){
        state.tableColumnShow = tablecolumn
    },
    SET_TABLE_ROW(state,tablerow){
        state.tableRowShow = tablerow
    }
}

// getters
const getters = {
    auditFontSize: state => state.auditFontSize,
	auditLineHeight: state => state.auditLineHeight,
	tableColumnShow: state => state.tableColumnShow,
	tableRowShow: state => state.tableRowShow
}

export default {
  state,
  mutations,
  getters
}
