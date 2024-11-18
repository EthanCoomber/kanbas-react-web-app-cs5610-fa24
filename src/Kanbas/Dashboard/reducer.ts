import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  enrollments: [],
};

console.log('initial state', initialState);
const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollInCourse: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: String(enrollment.id),
        user: enrollment.user_id,
        course: enrollment.course_id,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, { payload: enrollment }) => {
      console.log('state.enrollments', state.enrollments);

      state.enrollments = state.enrollments.filter((m: any) => m._id !== enrollment.enrollmentId);
    },
  },
});
export const { enrollInCourse, unenrollFromCourse, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
