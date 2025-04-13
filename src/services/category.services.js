import CategoryApis from "../apis/category.apis";

const { addCategoryApi, getCategoryApi, editCategoryApi, deleteCategoryApi } =
  CategoryApis;

const CategoryServices = {
  processGetCategory: async () => {
    try {
      const response = await getCategoryApi();
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processrAddCategory: async (payload) => {
    try {
      const response = await addCategoryApi(payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processEditCategory: async (id, payload) => {
    try {
      console.log(id, payload);
      const response = await editCategoryApi(id, payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processDeleteCategory: async (id) => {
    try {
      const response = await deleteCategoryApi(id);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CategoryServices;
