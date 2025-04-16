import axiosClient from "../configs/axios.config";

const BlogApis = {
  getBlogsApi: () => {
    return axiosClient.get("/admin/blog");
  },
  getBlogByIdApi: (id) => {
    return axiosClient.get(`/admin/blog/${id}`);
  },
  addBlogApi: (payload) => {
    return axiosClient.post("/admin/blog", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  editBlogApi: (id, payload) => {
    return axiosClient.put(`/admin/blog/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  deleteBlogApi: (id) => {
    return axiosClient.delete(`/admin/blog/${id}`);
  },
};

export default BlogApis;
