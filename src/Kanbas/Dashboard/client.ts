import axios from 'axios';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const fetchEnrollments = async () => {
  const response = await axios.get(`${ENROLLMENTS_API}`);
  return response.data;
};
export const enroll = async (courseId: string, user: any) => {
  const response = await axios.put(`${ENROLLMENTS_API}/${courseId}/${user._id}`);
  return response.data;
};
export const unenroll = async (courseId: string) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${courseId}`);
  return data;
};
