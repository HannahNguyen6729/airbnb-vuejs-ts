import axiosAPI from ".";

const getLocationListAPI = async (payloadNewKeyWord: string) => {
  //   const res = await axios({
  //     method: "GET",
  //     url: `https://airbnb.cybersoft.edu.vn/api/locations?location=${payloadNewKeyWord}`,
  //     headers: {
  //       tokenByClass:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI",
  //     },
  //   });
  //   console.log("res", res);
  //   return res.data;
  const res = await axiosAPI.get(
    `/api/locations?location=${payloadNewKeyWord}`
  );
  return res;
};

export default getLocationListAPI;
