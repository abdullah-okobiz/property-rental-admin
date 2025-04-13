import axiosClient from "../configs/axios.config";

const categoryApis = {
  getCategoryApi: () => {
    return axiosClient.get("/admin/category");
  },
  addCategoryApi: (payload) => {
    return axiosClient.post("/admin/category", payload);
  },
  editCategoryApi: (id, payload) => {
    
    return axiosClient.put(`/admin/category/${id}`, payload);
  },
  deleteCategoryApi: (id) => {
    return axiosClient.delete(`/admin/category/${id}`);
  },
};

export default categoryApis;
