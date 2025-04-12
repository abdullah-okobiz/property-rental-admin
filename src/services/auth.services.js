import AuthApis from "../apis/auth.apis";

const { loginApi, refreshTokenApi } = AuthApis;

const AuthServices = {
  processLogin: async (payload) => {
    try {
      const response = await loginApi(payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processrRefreshToken: async () => {
    try {
      const response = await refreshTokenApi();
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthServices;
