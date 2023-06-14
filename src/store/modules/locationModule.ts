import getLocationListAPI from "../../api/location";
const moduleLocation = {
  namespaced: true,
  state: () => {
    return {
      locationList: [],
    };
  },
  mutations: {
    setLocationMutation(state: any, payload: any) {
      state.locationList = payload;
      // console.log("state.locationList", state.locationList);
    },
  },
  actions: {
    async getLocations(context: any, payloadNewKeyWord: string) {
      const locationList = await getLocationListAPI(payloadNewKeyWord);
      context.commit("setLocationMutation", locationList);
    },
  },
};

export default { moduleLocation };
