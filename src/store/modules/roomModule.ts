import getRoomListAPI from "../../api/rooms";

const state = () => {
  return {
    roomList: [],
  };
};
const mutations = {
  getRoomsMutation(state: any, payload: any) {
    state.roomList = payload;
  },
};
const actions = {
  async getRooms(context: any, locationId: string) {
    const roomList = await getRoomListAPI(locationId);
    // console.log("roomList", roomList);
    context.commit("getRoomsMutation", roomList);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
