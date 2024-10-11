import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function AccountNavigation() {
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-course-home-link" className={`nav-link ${pathname.includes('Signin') ? 'list-group-item active border border-0' : 'list-group-item text-danger border border-0'}`}>
        Sign in
      </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-course-modules-link" className={`nav-link ${pathname.includes('Signup') ? 'list-group-item active border border-0' : 'list-group-item text-danger border border-0'}`}>
        Sign up
      </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-course-piazza-link" className={`nav-link ${pathname.includes('Profile') ? 'list-group-item active border border-0' : 'list-group-item text-danger border border-0'}`}>
        Profile
      </Link>
    </div>
  );
}
