import { getRoomListAPI, getRoomDetailAPI, bookRoomAPI } from "../../api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
    bookedRoom: {},
  };
};
const mutations = {
  setRoomsMutation(state: any, payload: any) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state: any, payload: any) {
    state.roomDetail = payload;
  },
  setBookRoomMutation(state: any, payload: any) {
    state.bookedRoom = payload;
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
  async bookRoomAction(context: any, payload: any) {
    const bookedRoom = await bookRoomAPI(payload);
    console.log("bookRoom", bookedRoom);
    context.commit("setBookRoomMutation", bookedRoom);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
