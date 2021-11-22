import { createStore } from "vuex";

export default createStore({
  state: {
    width: 0,
    scrollY: 0,
  },
  mutations: {
    setWidth(state, d) {
      state.width = d;
    },
    setScrollY(state, d) {
      state.scrollY = d;
    },
  },
  actions: {},
  modules: {},
});
