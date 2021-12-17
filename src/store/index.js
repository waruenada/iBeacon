import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    update_message: false,
    selected_value: "show_beacon",
  },
  mutations: {
    Updatemessage(state,val){
      state.update_message = val
    },
    update_selected(state, val){
      state.selected_value = val
      console.log(val);
    },
  },
  actions: {
  },
  modules: {
  }
})
