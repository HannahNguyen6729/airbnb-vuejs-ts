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
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorageMutation(state: any, payload: any) {
    if (payload !== null) {
      state.userLogin = payload;
    }
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
  loadUserLoginFromLocalStorage(context: any) {
    const userLogin = JSON.parse(localStorage.getItem("userLogin") || "null");
    context.commit("setUserLoginFromLocalStorageMutation", userLogin);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
