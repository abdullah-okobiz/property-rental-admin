import FeatureApis from "../apis/feature.apis";

const { addFeatureApi, getFeaturesApi, editFeatureApi, deleteFeatureApi } =
  FeatureApis;

const FeatureServices = {
  processGetFeature: async () => {
    try {
      const response = await getFeaturesApi();
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processrAddFeature: async (payload) => {
    try {
      const response = await addFeatureApi(payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processEditFeature: async (payload, id) => {
    try {
      const response = await editFeatureApi(payload, id);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
  processDeleteFeature: async ( id) => {
    try {
      const response = await deleteFeatureApi( id);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
};

export default FeatureServices;
