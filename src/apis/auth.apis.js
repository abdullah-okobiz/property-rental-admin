import axiosClient from "../configs/axios.config";

const AuthApis = {
  loginApi: (payload) => {
    return axiosClient.post("/admin/login", payload);
  },
  refreshTokenApi: () => {
    return axiosClient.post("/refresh");
  },
};

export default AuthApis;
