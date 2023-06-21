import axiosAPI from ".";

export const getTicketByUserIdAPI = async (userId: string) => {
  const res = await axiosAPI.get(`/api/tickets/by-user?userId=${userId}`);
  return res;
};
