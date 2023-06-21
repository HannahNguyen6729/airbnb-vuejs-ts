import { getTicketByUserIdAPI } from "../../api/ticket";

const state = () => {
  return {
    roomsByUser: [],
  };
};
const mutations = {
  setTicketsMutation(state: any, payload: any) {
    state.roomsByUser = payload.map((item: any) => ({
      checkIn: item.checkIn,
      checkOut: item.checkOut,
      ...item.roomId,
    }));
    console.log("roomsByUser", state.roomsByUser);
  },
};
const actions = {
  async getTicketsAction(context: any, userId: string) {
    const roomsByUser = await getTicketByUserIdAPI(userId);
    context.commit("setTicketsMutation", roomsByUser);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
