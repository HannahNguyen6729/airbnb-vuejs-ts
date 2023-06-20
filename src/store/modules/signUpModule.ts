import { signUpAPI } from "../../api/auth";

const state = () => {
  return {
    newUser: {},
  };
};
const mutations = {
  signUpMutation(state: any, payload: any) {
    state.newUser = payload;
  },
};
const actions = {
  async signUpAction(context: any, payload: any) {
    const newUserData = await signUpAPI(payload.modifiedUserData);
    payload.router.push("/sign-in");
    context.commit("signUpMutation", newUserData);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
