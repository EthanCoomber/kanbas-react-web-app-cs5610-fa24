import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { enrollInCourse, unenrollFromCourse, setEnrollments } from './reducer'; // Import actions
import * as client from './client';

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, editCourse, enrolling, setEnrolling, updateEnrollment }: { courses: any[]; course: any; setCourse: (course: any) => void; addNewCourse: () => void; deleteCourse: (course: any) => void; updateCourse: () => void; editCourse: (course: any) => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void; updateEnrollment: (courseId: string, enrolled: boolean) => void }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer); // Pull enrollments from store

  console.log('currentUser', currentUser);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false); // State to toggle between all courses and enrolled courses
  const [enrollmentIdCounter, setEnrollmentIdCounter] = useState(10);

  const isEnrolled = (courseId: string) => enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId);

  const findEnrolledCourse = (courseId: string) => enrollments.find((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId);

  // // Toggle enrollment for the course
  const handleToggleEnrollment = async (courseId: string) => {
    console.log('courseId', courseId);
    if (isEnrolled(courseId)) {
      const foundCourse = findEnrolledCourse(courseId);
      console.log('foundCourse', foundCourse);
      await client.unenroll(foundCourse._id);
      dispatch(unenrollFromCourse({ enrollmentId: foundCourse._id })); // Unenroll action
    } else {
      await client.enroll(courseId, currentUser);
      dispatch(enrollInCourse({ id: enrollmentIdCounter, user_id: currentUser._id, course_id: courseId })); // Enroll action
      setEnrollmentIdCounter(enrollmentIdCounter + 1);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {currentUser.role === 'STUDENT' && (

      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary">
        {enrolling ? 'My Courses' : 'All Courses'}
      </button>
      )}

      <hr />

      {(currentUser.role === 'FACULTY' || currentUser.role === 'ADMIN') && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </>
      )}

      <br />
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: '300px' }} key={course._id}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${course.enrolled ? 'btn-danger' : 'btn-success'} float-end`}
                        >
                          {course.enrolled ? 'Unenroll' : 'Enroll'}
                        </button>
                      )}
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>

                    {currentUser.role === 'FACULTY' ? (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning float-end me-2"
                          onClick={(event) => {
                            event.preventDefault();
                            editCourse(course._id);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    ) : (
                      currentUser.role === 'STUDENT' && (
                        <>
                          {/* <button
                            className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleToggleEnrollment(course._id);
                            }}
                          >
                            {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                          </button> */}
                        </>
                      )
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
