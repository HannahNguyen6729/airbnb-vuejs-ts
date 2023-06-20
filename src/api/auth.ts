import axiosAPI from ".";

export const signUpAPI = async (userData: any) => {
  const res = await axiosAPI.post("/api/auth/register", userData);
  return res;
};

export const loginAPI = async (userLogin: any) => {
  const res = await axiosAPI.post("/api/auth/login", userLogin);
  return res;
};
