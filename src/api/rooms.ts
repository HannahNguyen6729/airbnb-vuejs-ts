import axiosAPI from ".";

export const getRoomListAPI = async (locationId: string) => {
  const res = await axiosAPI.get(`/api/rooms?locationId=${locationId}`);
  return res;
};

export const getRoomDetailAPI = async (roomId: string) => {
  const res = await axiosAPI.get(`/api/rooms/${roomId}`);
  return res;
};
