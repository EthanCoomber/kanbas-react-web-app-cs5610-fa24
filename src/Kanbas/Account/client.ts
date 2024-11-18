import axios from 'axios';
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const signin = async (credentials: any) => {
  console.log('credentials', credentials);
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  console.log('credentials response', response);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const profile = async () => {
  console.log('in profile');
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  console.log('response', response);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

// export const findMyCourses = async () => {
//   console.log('finding courses');
//   const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
//   console.log('data', data);
//   return data;
// };
