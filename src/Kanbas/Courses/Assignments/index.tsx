import { BsGripVertical } from 'react-icons/bs';
import AssignmentControlButtons from './AssignmentControlButtons';
import AssignmentTopControlButtons from './AssignmentTopControlButtons';
import AssignmentControls from './AssignmentControls';
import { FaEdit } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment } from './reducer';

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  console.log('assignments', assignments);

  return (
    <div id="wd-assignments" className="list-group rounded-0">
      <AssignmentControls />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical size={40} className="me-2 fs-3 mr-2 d-inline-block mb-1" />
            <FaCaretDown size={20} className="me-2 fs-3 mr-2 d-inline-block mb-1" />
            <span className="d-inline-block">ASSIGNMENTS</span>
            <AssignmentTopControlButtons />
          </div>
          <ul className="wd-assignment list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment list-group-item p-2 ps-1">
                  <BsGripVertical size={40} className="me-2 fs-3 mr-2 d-inline-block mb-4" />
                  {currentUser.role === 'FACULTY' && (
                    <Link className="wd-assignment-link" to={`${assignment._id}`}>
                      <FaEdit size={30} color="green" className="me-4 d-inline-block mb-4" />
                    </Link>
                  )}
                  <div className="d-inline-block">
                    <strong>{assignment.title}</strong>
                    <br />
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pts
                  </div>
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {
                      dispatch(deleteAssignment(assignmentId));
                    }}
                  />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
