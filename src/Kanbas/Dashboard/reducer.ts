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
        _id: '11',
        user: enrollment.user_id,
        course: enrollment.course_id,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, { payload: enrollment }) => {
      console.log('state.enrollments', state.enrollments);

      state.enrollments = state.enrollments.filter((m: any) => m._id !== enrollment.enrollmentId);

      //   const foundEnrollment = state.enrollments.find((m: any) => {
      //     console.log('testing: ', m.course !== enrollment.course_id && m.user !== enrollment.user_id, m.course, enrollment.course_id, m.user, enrollment.user_id);
      //     return m.course !== enrollment.course_id && m.user !== enrollment.user_id;
      //   });
      //   console.log('found enrollment', foundEnrollment);
      //   state.enrollments = state.enrollments.filter((m: any) => m.course !== enrollment.course_id && m.user !== enrollment.user_id);
    },
  },
});
export const { enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
