import getLocationListAPI from "../../api/location";
const moduleLocation = {
  namespaced: true,
  state: () => {
    return {
      locationList: [],
    };
  },
  mutations: {
    getLocationMutation(state: any, payload: any) {
      state.locationList = payload;
      // console.log("state.locationList", state.locationList);
    },
  },
  actions: {
    async getLocations(context: any) {
      const locationList = await getLocationListAPI();
      context.commit("getLocationMutation", locationList);
    },
  },
};

export default { moduleLocation };
