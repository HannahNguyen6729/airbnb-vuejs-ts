import axiosAPI from ".";

export const signUpAPI = async (userData: any) => {
  const res = await axiosAPI.post("/api/auth/register", userData);
  return res;
};
