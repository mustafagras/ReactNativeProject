const baseURL = "https://wissenreactnative-default-rtdb.firebaseio.com/";

export const apiConfig = {
  educationListGet: `${baseURL}education.json`,
  eventListGet: `${baseURL}event.json`,
  sliderDataGet: `${baseURL}sliderData.json`,
  partnersDataGet: `${baseURL}partnersData.json`,
  successStoriesDataGet: `${baseURL}successStoriesData.json`,
  postRegister: `${baseURL}users.json`,
  getLogin: `${baseURL}users.json`,
  getTargetPassword: `${baseURL}users.json`,
  patchTargetPassword: `${baseURL}users`,
};
