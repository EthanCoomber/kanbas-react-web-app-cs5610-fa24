import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from '../Database';
const initialState = {
  enrollments: enrollments,
};

console.log('initial state', initialState);
const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: new Date(),
        user: enrollment.user_id,
        course: enrollment.course_id,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter((m: any) => m.course !== enrollment.course_id && m.user !== enrollment.user_id);
    },
  },
});
export const { enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
