import { createStore } from "vuex";

export default createStore({
  state: {
    status: '',
    name: '',
    email: '',
    message: ''
  },
  mutations: {
    SET_STATUS(state, value){
      state.status = value
    },
    SET_FEEDBACK(state, feedback){
      state.name = feedback.name
      state.email = feedback.email
      state.message = feedback.message
    }
  },
  actions: {
    sendFeedback({commit}, feedback){
      commit('SET_STATUS', "Sending data")
      commit('SET_FEEDBACK', feedback)
        setTimeout(() => {
          commit('SET_STATUS', "Data sent succesfully")
          setTimeout(() => {
            commit('SET_STATUS', "")
          }, 5000);
        }, 1000);
    }
  },
  modules: {},
});
