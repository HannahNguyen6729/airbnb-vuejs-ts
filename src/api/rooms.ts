import axiosAPI from ".";

const getRoomListAPI = async (locationId: string) => {
  const res = await axiosAPI.get(`/api/rooms?locationId=${locationId}`);
  return res;
};

export default getRoomListAPI;
