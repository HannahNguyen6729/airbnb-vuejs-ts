import { createStore } from "vuex";
import moduleLocation from "./modules/locationModule";
import moduleRoom from "./modules/roomModule";
import moduleSignUp from "./modules/signUpModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleLocation: moduleLocation.moduleLocation,
    moduleRoom,
    moduleSignUp,
  },
});
