const baseURL = "http://localhost:8080/TrainingPointSystem/api";

export const API = {
  login: `${baseURL}/login`,
  register: `${baseURL}/user/register`,
  getAllFaculties: `${baseURL}/faculty`,
  getAllPointGroup: `${baseURL}/point-groups`,
  currentUser: `${baseURL}/user/current`,
  getPost: `${baseURL}/posts`,
  comments: (postId) => `${baseURL}/posts/${postId}/comments`,
  likePost: (postId) => `${baseURL}/posts/${postId}/like`,
  registerMission: (missionId) => `${baseURL}/missions/${missionId}/register`,
  reportMissing: (missionId) => `${baseURL}/missions/${missionId}/missing`,
  missionsByActivities: (activityId) =>
    `${baseURL}/activities/${activityId}/missions`,
  userMission: `${baseURL}/missions`,
  getAllActivities: (kw = "") => `${baseURL}/activities?kw=${kw}`,
  getDetailActivity: (id) => `${baseURL}/activities/${id}`,
  activities: `${baseURL}/activities`,
  addActivity: (pointGroupId) =>
    `${baseURL}/point-groups/${pointGroupId}/activities`,
  addMission: (activityId) => `${baseURL}/activities/${activityId}/missions`,
};
