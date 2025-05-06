import axiosClient from "../configs/axios.config";

const StaffManagementApis = {
  createStaff: ({ payload }) => {
    return axiosClient.post(`/admin/create-staff`, payload);
  },
  findAllStaffs: ({ page, role, search }) => {
    return axiosClient.get(
      `/admin/staff?page=${page}&role=${role}&search=${search}`
    );
  },
  changeStaffField: ({ id, payload }) => {
    return axiosClient.patch(`/admin/staff/${id}`, payload);
  },
  deleteStaff: ({ id }) => {
    return axiosClient.delete(`/admin/staff/${id}`);
  },
};

export default StaffManagementApis;
