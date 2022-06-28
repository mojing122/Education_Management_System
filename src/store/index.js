import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageid:1,
    studentno:0
  },
  mutations: {
    changePage(state,msg){
      state.pageid=msg
    },
    changeStudentno(state,msg){
      state.studentno=msg
    }
  },
  actions: {
  },
  modules: {
  },
})
