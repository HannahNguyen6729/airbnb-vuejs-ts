import { signUpAPI, loginAPI } from "../../api/auth";

const state = () => {
  return {
    newUser: {},
    userLogin: {},
  };
};
const mutations = {
  signUpMutation(state: any, payload: any) {
    state.newUser = payload;
  },
  loginMutation(state: any, payload: any) {
    state.userLogin = payload;
  },
};
const actions = {
  async signUpAction(context: any, payload: any) {
    const newUserData = await signUpAPI(payload.modifiedUserData);
    payload.router.push("/sign-in");
    context.commit("signUpMutation", newUserData);
  },
  async logInAction(context: any, payload: any) {
    try {
      const userLogin = await loginAPI(payload.userLogin);
      payload.router.push("/");
      context.commit("loginMutation", userLogin);
    } catch (err) {
      alert("Email or password is incorrect!");
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
