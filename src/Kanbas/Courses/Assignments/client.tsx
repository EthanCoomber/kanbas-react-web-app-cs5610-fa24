import axios from 'axios';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const findAssignmentForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, assignment);
  return response.data;
};
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${MODULES_API}/${assignmentId}`);
  return response.data;
};
export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${MODULES_API}/${assignment._id}`, assignment);
  return response.data;
};
