import BlogApis from "../apis/blog.apis";

const { getBlogsApi, getBlogByIdApi, addBlogApi, editBlogApi, deleteBlogApi } =
  BlogApis;

const BlogServices = {
  processGetBlogs: async () => {
    try {
      const response = await getBlogsApi();
      return response?.data?.data;
    } catch (error) {
      throw error;
    }
  },

  processGetBlogById: async (id) => {
    try {
      const response = await getBlogByIdApi(id);
      return response?.data?.data;
    } catch (error) {
      throw error;
    }
  },

  processAddBlog: async (payload) => {
    try {
      const response = await addBlogApi(payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },

  processEditBlog: async (id, payload) => {
    try {
      const response = await editBlogApi(id, payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },

  processDeleteBlog: async (id) => {
    try {
      const response = await deleteBlogApi(id);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
};

export default BlogServices;
