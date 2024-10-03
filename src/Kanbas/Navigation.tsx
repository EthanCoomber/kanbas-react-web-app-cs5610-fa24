import { AiOutlineDashboard } from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { LiaBookSolid, LiaCogSolid } from 'react-icons/lia';
import { FaInbox, FaRegCircleUser } from 'react-icons/fa6';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
export default function KanbasNavigation() {
  const { pathname } = useLocation();

  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block z-2 bg-black">
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" height="75px" />
      </a>
      <Link to="/Kanbas/Account" id="wd-account-link" className={`nav-link ${pathname.includes('Account') ? 'list-group-item text-center border-0 bg-white text-danger}' : 'list-group-item text-white bg-black text-center border-0'}`}>
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>
      <br />
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className={`nav-link ${pathname.includes('Dashboard') ? 'list-group-item text-center border-0 bg-white text-danger}' : 'list-group-item text-white bg-black text-center border-0'}`}>
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link to="/Kanbas/Courses" id="wd-course-link" className={`nav-link ${pathname.includes('Courses') ? 'list-group-item text-center border-0 bg-white text-danger}' : 'list-group-item text-white bg-black text-center border-0'}`}>
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link to="/Kanbas/Calendar" id="wd-course-link" className={`nav-link ${pathname.includes('Calendar') ? 'list-group-item text-center border-0 bg-white text-danger}' : 'list-group-item text-white bg-black text-center border-0'}`}>
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link to="/Kanbas/Inbox" id="wd-course-link" className={`nav-link ${pathname.includes('Inbox') ? 'list-group-item text-center border-0 bg-white text-danger}' : 'list-group-item text-white bg-black text-center border-0'}`}>
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link to="/Labs" id="wd-course-link" className={`nav-link ${pathname.includes('Labs') ? 'list-group-item text-center border-0 bg-white text-danger}' : 'list-group-item text-white bg-black text-center border-0'}`}>
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
