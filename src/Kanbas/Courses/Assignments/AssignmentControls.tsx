import { FaPlus } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import GreenCheckmark from './GreenCheckmark';
export default function AssignmentControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleClick = () => {
    // Navigate to the new URL
    navigate(`${location.pathname}/new`);
  };

  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      {currentUser.role === 'FACULTY' && (
        <>
          <button onClick={handleClick} id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end margin-right-1">
            <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
            Assignment
          </button>
          <button id="wd-view-progress" className="btn btn-lg btn-secondary float-end me-1" type="button">
            <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
            Group
          </button>
        </>
      )}
      {/* <input type="email" id="input1" placeholder="name@example.com" /> */}
      <div className="input-container">
        <FaSearch className="input-icon" />
        <input type="email" className="form-control w-25 search-input" id="search" aria-describedby="search" placeholder="Search..." />
      </div>
      {/* <input type="email" className="form-control w-25 search-input" id="search" aria-describedby="search" placeholder=" Search..."></input> */}
    </div>
  );
}
