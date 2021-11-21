import { createStore } from "vuex";

export default createStore({
  state: {
    width: 0,
  },
  mutations: {
    setWidth(state, d) {
      state.width = d;
    },
  },
  actions: {},
  modules: {},
});
