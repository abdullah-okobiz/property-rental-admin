import TeamMemberApis from "../apis/teamMember.apis";

const {
  getTeamMembersApi,
  addTeamMemberApi,
  editTeamMemberApi,
  deleteTeamMemberApi,
} = TeamMemberApis;

const TeamMemberServices = {
  processGetTeamMembers: async () => {
    try {
      const response = await getTeamMembersApi();
      return response?.data?.data;
    } catch (error) {
      throw error;
    }
  },

  processAddTeamMember: async (payload) => {
    try {
      console.log("add team member service", payload.getAll("teamMemberImage"));
      const response = await addTeamMemberApi(payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },

  processEditTeamMember: async (payload, id) => {
    try {
      const response = await editTeamMemberApi(payload, id);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },

  processDeleteTeamMember: async (id) => {
    try {
      const response = await deleteTeamMemberApi(id);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },
};

export default TeamMemberServices;
