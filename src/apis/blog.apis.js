import axiosClient from "../configs/axios.config";

const BlogApis = {
  getBlogsApi: () => {
    return axiosClient.get("/admin/blog");
  },
  getBlogByIdApi: (id) => {
    return axiosClient.get(`/admin/blog/${id}`);
  },
  addBlogApi: (payload) => {
    return axiosClient.post("/admin/blog", payload);
  },
  editBlogApi: (id, payload) => {
    return axiosClient.put(`/admin/blog/${id}`, payload);
  },
  deleteBlogApi: (id) => {
    return axiosClient.delete(`/admin/blog/${id}`);
  },
};

export default BlogApis;
