import { useParams } from 'react-router';
// import * as db from '../../Database';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addAssignment, deleteAssignment, updateAssignment, editAssignment } from './reducer';

export default function AssignmentEditor() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const dispatch = useDispatch();

  const assignmentId = pathname.split('/')[5];

  const foundAssignment = assignments.find((assignment: { _id: string }) => assignment._id === assignmentId);

  const [currAssignment, setCurrAssignment] = useState({
    _id: '',
    title: '',
    course: cid,
    name: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  console.log('currentUser', currentUser);
  console.log('currAssignment', currAssignment);

  useEffect(() => {
    if (foundAssignment) {
      setCurrAssignment(foundAssignment);
    }
  }, [foundAssignment]);

  const handleSubmit = () => {
    if (foundAssignment) {
      console.log('updating');
      dispatch(updateAssignment(currAssignment));
    } else {
      console.log('adding');
      dispatch(addAssignment(currAssignment));
    }
  };

  return (
    <div id="wd-assignments-editor form-group">
      <label htmlFor="wd-name">{currAssignment?.name || 'Assignment Name'}</label>
      <br />
      <input id="wd-name" className="form-control" value={currAssignment?.title || ''} onChange={(e) => setCurrAssignment({ ...currAssignment, title: e.target.value })} />
      <br />
      <br />
      <textarea id="wd-description" className="form-control" value={currAssignment?.description || ''} onChange={(e) => setCurrAssignment({ ...currAssignment, description: e.target.value })} />
      <br />
      {/* </td>
          <td> */}
      <div className="flex">
        <input id="wd-points" type="number" value={currAssignment?.points || 0} onChange={(e) => setCurrAssignment({ ...currAssignment, points: Number(e.target.value) })} className="form-control float-end w-50 me-3" />
        <span className="float-end me-3">Points</span>
      </div>
      <br />
      <br />
      <br />
      <div className="flex">
        <select id="wd-display-grade-as" className="float-end w-50 form-control">
          <option value="Assignments">ASSIGNMENTS</option>
        </select>
        <span className="float-end me-3">Assignment Group</span>
      </div>
      <br />
      <br />
      <br />
      <div className="flex">
        <select id="wd-display-grade-as" className="float-end w-50 form-control">
          <option value="Percentage">Percentage</option>
        </select>
        <span className="float-end me-3">Display Grade As</span>
      </div>
      <br />
      <br />
      <br />
      <div className="flex">
        <div className="float-end w-50 border rounded border-dark p-3">
          <select id="wd-display-grade-as" className="float-end form-control">
            <option value="Online">Online</option>
          </select>
          <strong className="p-2 mb-3 mt-3">Online Entry Options</strong>
          <br />
          <input type="checkbox" name="text-entry" id="wd-text-entry" className="p-2 mb-3 mt-3 me-2" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />

          <input type="checkbox" name="website-url" id="wd-website-url" className="p-2 mb-3 mt-3 me-2" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />

          <input type="checkbox" name="media-recordings" id="wd-media-recordings" className="p-2 mb-3 mt-3 me-2" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />

          <input type="checkbox" name="student-annotation" id="wd-student-annotation" className="p-2 mb-3 mt-3 me-2" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
          <br />

          <input type="checkbox" name="file-upload" id="wd-file-upload" className="p-2 mb-3 mt-3 me-2" />
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>

        <span className="float-end me-3">Display Grade As</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex">
        <div className="float-end w-50 border rounded border-dark p-3">
          <strong className="p-2 mb-3 mt-3">Assign to</strong>
          <select id="wd-display-grade-as" className="float-end form-control">
            <option value="Everyone">Everyone</option>
          </select>

          <br />
          <br />
          <br />

          <strong className="p-2 mb-3 mt-3">Due</strong>
          <br />
          <input type="date" id="wd-available-until" value={currAssignment?.dueDate || ''} onChange={(e) => setCurrAssignment({ ...currAssignment, dueDate: e.target.value })} className="float-end form-control" />
          <br />

          <br />
          <strong className="p-2 mt-3 float-end w-50">Available until</strong>

          <strong className="p-2 mt-3 float-end w-50">Available from</strong>
          <input type="date" id="wd-available-from" value={currAssignment?.availableFromDate || ''} onChange={(e) => setCurrAssignment({ ...currAssignment, availableFromDate: e.target.value })} className="float-end form-control w-50" />
          <input type="date" id="wd-available-until" value={currAssignment?.availableUntilDate || ''} onChange={(e) => setCurrAssignment({ ...currAssignment, availableUntilDate: e.target.value })} className="float-end form-control w-50" />
          <br />
        </div>

        <span className="float-end me-3">Assign</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to={`../../Courses/${cid}/Assignments`}>
        <button id="wd-add-assignment-btn" onClick={handleSubmit} className="btn btn-lg btn-danger me-1 float-end margin-right-1">
          Save
        </button>
      </Link>

      <Link to={`../../Courses/${cid}/Assignments`}>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary float-end me-1" type="button">
          Cancel
        </button>
      </Link>
    </div>
  );
}
