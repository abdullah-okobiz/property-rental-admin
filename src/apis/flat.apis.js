import axiosClient from "../configs/axios.config";

const FlatApis = {
  findAllFlats: ({ page, status, sort, search, isSold }) => {
    return axiosClient.get(
      `/flat?page=${page}&publishStatus=${status}&sort=${sort}&search=${search}&isSold=${isSold}`
    );
  },
  changeStatus: ({ id, payload }) => {
    return axiosClient.patch(`/admin/flat/${id}`, payload);
  },
  deleteOne: ({ id }) => {
    return axiosClient.delete(`/admin/flat/${id}`);
  },
};

export default FlatApis;
