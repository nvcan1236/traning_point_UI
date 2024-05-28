const baseURL = 'http://localhost:8080/TrainingPointSystem/api'

export const API = {
  login: `${baseURL}/login`,
  currentUser: `${baseURL}/user/current`,
  getPost: `${baseURL}/posts`,
  comments: (postId) => `${baseURL}/posts/${postId}/comments`,
  likePost: (postId) =>  `${baseURL}/posts/${postId}/like`,
  registerMission: (missionId)=>`${baseURL}/missions/${missionId}/register`,
  missions: (activityId)=>`${baseURL}/activities/${activityId}/missions`,
  userMission: `${baseURL}/missions`
}