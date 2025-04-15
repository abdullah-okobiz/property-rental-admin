import axiosClient from "../configs/axios.config";

const WhyChooseUsApis = {
  getWhyChooseUsApi: () => {
    return axiosClient.get("/admin/why-choose-us");
  },
  addWhyChooseUsApi: (payload) => {
    return axiosClient.post("/admin/why-choose-us", payload);
  },
  editWhyChooseUsApi: (id, payload) => {
    return axiosClient.put(`/admin/why-choose-us/${id}`, payload);
  },
  deleteWhyChooseUsApi: (id) => {
    return axiosClient.delete(`/admin/why-choose-us/${id}`);
  },
};

export default WhyChooseUsApis;
