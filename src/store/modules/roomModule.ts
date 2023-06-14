import { getRoomListAPI, getRoomDetailAPI } from "../../api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
  };
};
const mutations = {
  setRoomsMutation(state: any, payload: any) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state: any, payload: any) {
    state.roomDetail = payload;
  },
};
const actions = {
  async getRooms(context: any, locationId: string) {
    const roomList = await getRoomListAPI(locationId);
    // console.log("roomList", roomList);
    context.commit("setRoomsMutation", roomList);
  },
  async getRoomDetail(context: any, roomId: string) {
    const roomDetail = await getRoomDetailAPI(roomId);
    // console.log("roomList", roomList);
    context.commit("setRoomDetailMutation", roomDetail);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
