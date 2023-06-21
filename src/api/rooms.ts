import axiosAPI from ".";

export const getRoomListAPI = async (locationId: string) => {
  const res = await axiosAPI.get(`/api/rooms?locationId=${locationId}`);
  return res;
};

export const getRoomDetailAPI = async (roomId: string) => {
  const res = await axiosAPI.get(`/api/rooms/${roomId}`);
  return res;
};

export const bookRoomAPI = async (payload: any) => {
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const res = await axiosAPI.post(`/api/rooms/booking/`, payload, {
    headers: {
      token: userLogin.token,
    },
  });
  return res;
};
