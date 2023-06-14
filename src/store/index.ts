import { createStore } from "vuex";
import moduleLocation from "./modules/locationModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleLocation: moduleLocation.moduleLocation,
  },
});
