const baseURL = "http://localhost:8080/TrainingPointSystem/api";

export const API = {
  // USER
  login: `${baseURL}/login`,
  register: `${baseURL}/user/register`,
  currentUser: `${baseURL}/user/current`,
  getStudentByStudentId: (studentId)=>`${baseURL}/students/${studentId}`,

  // FACULTY
  getAllFaculties: `${baseURL}/faculties`,
  getFacultyByAssistant: `${baseURL}/assistants/faculties`,

  // POINT GROUP
  getAllPointGroup: `${baseURL}/point-groups`,

  // POST
  getPost: `${baseURL}/posts`,
  detailPost: (postId) => `${baseURL}/posts/${postId}`,
  comments: (postId) => `${baseURL}/posts/${postId}/comments`,
  likePost: (postId) => `${baseURL}/posts/${postId}/like`,
  deletePost: (postId) => `${baseURL}/posts/${postId}`,

  // ACTIVITY
  getAllActivities: (kw = "") => `${baseURL}/activities?kw=${kw}`,
  getDetailActivity: (id) => `${baseURL}/activities/${id}`,
  activities: `${baseURL}/activities`,
  addActivity: (pointGroupId) =>
    `${baseURL}/point-groups/${pointGroupId}/activities`,
  updateActivity: (activityId) => `${baseURL}/activities/${activityId}`,
  deletelActivity: (id) => `${baseURL}/activities/${id}`,

  // MIISIONS
  registerMission: (missionId) => `${baseURL}/missions/${missionId}/register`,
  addMission: (activityId) => `${baseURL}/activities/${activityId}/missions`,
  updateMission: (missionId) => `${baseURL}/missions/${missionId}`,
  deleteMission: (missionId) => `${baseURL}/missions/${missionId}`,
  reportMissing: (missionId) => `${baseURL}/missions/${missionId}/missing`,
  missionsByActivities: (activityId) =>
    `${baseURL}/activities/${activityId}/missions`,
  userMission: `${baseURL}/missions/user-mission`,
  getMissingReport: (facultyId) =>
    `${baseURL}/missing-report/faculty?facultyId=${facultyId}`,
  getDetailMissingReport: (missingReportId) => `${baseURL}/missing-report/${missingReportId}`,
  updateMissingReport: (missingReportId) => `${baseURL}/missing-report/${missingReportId}`,
  getResultById:  (userId) => `${baseURL}students/result-training-point?id=${userId}`,
  getMissingReportById:  (userId, periodId) => `${baseURL}missing-report/student?studentId=${userId}&periodId=${periodId}`,

  // STATS
  statsByRank: `${baseURL}/stats/training-points/rank`,
  statsByFaculty: `${baseURL}/stats/training-points/faculty`,

  //PERIOD
  getAllPeriod: (year) => `${baseURL}/period?year=${year}`,

  //MESSAGES
  sendMessage: `${baseURL}/chat/send`,
  getUsers: `${baseURL}/chat/get-users`,
};
