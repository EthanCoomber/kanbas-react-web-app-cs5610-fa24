import { FaPlus } from 'react-icons/fa6';
import GreenCheckmark from './GreenCheckmark';
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end margin-right-1">
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Assignment
      </button>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary float-end me-1" type="button">
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Group
      </button>
      {/* <input type="email" id="input1" placeholder="name@example.com" /> */}
      <input type="email" className="form-control w-25" id="search" aria-describedby="search" placeholder="Search..."></input>

      {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
    </div>
  );
}
