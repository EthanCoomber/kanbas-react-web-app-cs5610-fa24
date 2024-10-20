import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as db from '../Database';
import { useSelector, useDispatch } from 'react-redux';
import { enrollInCourse, unenrollFromCourse } from './reducer'; // Import actions

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, editCourse }: { courses: any[]; course: any; setCourse: (course: any) => void; addNewCourse: () => void; deleteCourse: (course: any) => void; updateCourse: () => void; editCourse: (course: any) => void }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer); // Pull enrollments from store
  console.log('enrollments', enrollments);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false); // State to toggle between all courses and enrolled courses

  // Check if a student is enrolled in the course
  const isEnrolled = (courseId: string) => enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId);

  // Toggle enrollment for the course
  const handleToggleEnrollment = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenrollFromCourse({ user: currentUser._id, course: courseId })); // Unenroll action
    } else {
      dispatch(enrollInCourse({ user: currentUser._id, course: courseId })); // Enroll action
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser.role === 'FACULTY' && (
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

      {/* Enrollments Button for Students */}
      {currentUser.role === 'STUDENT' && (
        <button
          className="btn btn-info float-end"
          onClick={() => setShowAllCourses(!showAllCourses)} // Toggle between all courses and enrolled courses
        >
          {showAllCourses ? 'Show Enrolled Courses' : 'Show All Courses'}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => showAllCourses || enrollments.some((enrollment: { user: any; course: any }) => enrollment.user === currentUser._id && enrollment.course === course._id)) // Show either all courses or only enrolled courses
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: '300px' }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={isEnrolled(course._id) ? `/Kanbas/Courses/${course._id}/Home` : '#'}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      if (!isEnrolled(course._id)) {
                        e.preventDefault(); // Prevent navigation if the user is not enrolled
                      }
                    }}
                  >
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
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
                            <button
                              className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleToggleEnrollment(course._id);
                              }}
                            >
                              {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                            </button>
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
