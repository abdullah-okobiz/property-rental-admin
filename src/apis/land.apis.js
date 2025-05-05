import axiosClient from "../configs/axios.config";

const LandApis = {
  findAllLands: ({ page, status, sort, search, isSold }) => {
    return axiosClient.get(
      `/land?page=${page}&publishStatus=${status}&sort=${sort}&search=${search}&isSold=${isSold}`
    );
  },
  changeStatus: ({ id, payload }) => {
    return axiosClient.patch(`/admin/land/${id}`, payload);
  },
  deleteOne: ({ id }) => {
    return axiosClient.delete(`/admin/land/${id}`);
  },
};

export default LandApis;
