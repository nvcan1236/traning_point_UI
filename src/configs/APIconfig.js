const baseURL = "http://localhost:8080/TrainingPointSystem/api";

export const API = {
  // USER
  login: `${baseURL}/login`,
  register: `${baseURL}/user/register`,
  currentUser: `${baseURL}/user/current`,

  // FACULTY
  getAllFaculties: `${baseURL}/faculty`,

  // POINT GROUP
  getAllPointGroup: `${baseURL}/point-groups`,

  // POST
  getPost: `${baseURL}/posts`,
  detailPost: (postId) => `${baseURL}/posts/${postId}`,
  comments: (postId) => `${baseURL}/posts/${postId}/comments`,
  likePost: (postId) => `${baseURL}/posts/${postId}/like`,

  // ACTIVITY
  getAllActivities: (kw = "") => `${baseURL}/activities?kw=${kw}`,
  getDetailActivity: (id) => `${baseURL}/activities/${id}`,
  activities: `${baseURL}/activities`,
  addActivity: (pointGroupId) =>
    `${baseURL}/point-groups/${pointGroupId}/activities`,
  updateActivity: (activityId) => `${baseURL}/activities/${activityId}`,

  // MIISIONS
  registerMission: (missionId) => `${baseURL}/missions/${missionId}/register`,
  addMission: (activityId) => `${baseURL}/activities/${activityId}/missions`,
  updateMission: (missionId) => `${baseURL}/missions/${missionId}`,
  reportMissing: (missionId) => `${baseURL}/missions/${missionId}/missing`,
  missionsByActivities: (activityId) =>
    `${baseURL}/activities/${activityId}/missions`,
  userMission: `${baseURL}/missions`,
  getMissingReport: (facultyId) =>
    `${baseURL}/missing-report?facultyId=${facultyId}`,
  getDetailMissingReport: (missingReportId) => `${baseURL}/missing-report/${missingReportId}`,
  updateMissingReport: (missingReportId) => `${baseURL}/missing-report/${missingReportId}`
};
