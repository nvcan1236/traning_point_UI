const baseURL = 'http://localhost:8080/TrainingPointSystem/api'

export const API = {
  login: `${baseURL}/login`,
  register: `${baseURL}/user/register`,
  getAllFaculties: `${baseURL}/faculty`,
  getAllPointGroup: `${baseURL}/point-groups`,
  currentUser: `${baseURL}/user/current`,
  getPost: `${baseURL}/posts`,
  comments: (postId) => `${baseURL}/posts/${postId}/comments`,
  likePost: (postId) =>  `${baseURL}/posts/${postId}/like`,
  registerMission: (missionId)=>`${baseURL}/missions/${missionId}/register`,
  reportMissing: (missionId)=>`${baseURL}/missions/${missionId}/missing`,
  missions: (activityId)=>`${baseURL}/activities/${activityId}/missions`,
  userMission: `${baseURL}/missions`
}