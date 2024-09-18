import { BsGripVertical } from 'react-icons/bs';
import AssignmentControlButtons from './AssignmentControlButtons';
import AssignmentTopControlButtons from './AssignmentTopControlButtons';
import { FaEdit } from 'react-icons/fa';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="list-group rounded-0">
      {/* <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button> */}

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
            ASSIGNMENTS 40% of Total <button>+</button>
            <AssignmentTopControlButtons />
          </div>
          <ul className="wd-assignment list-group rounded-0">
            <li className="wd-assignment list-group-item p-2 ps-1">
              <BsGripVertical size={40} className="me-2 fs-3 mr-2 d-inline-block mb-4" />
              <FaEdit size={30} color="green" className="me-4 d-inline-block mb-4" />
              <div className="d-inline-block">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pts
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item p-2 ps-1">
              <BsGripVertical size={40} className="me-2 fs-3 d-inline-block mb-4" />
              <FaEdit size={30} color="green" className="me-4 d-inline-block mb-4" />
              <div className="d-inline-block">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100pts
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical size={40} className="me-2 fs-3 d-inline-block mb-4" />
              <FaEdit size={30} color="green" className="me-4 d-inline-block mb-4" />
              <div className="d-inline-block">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100pts
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
