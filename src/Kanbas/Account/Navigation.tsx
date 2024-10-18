import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ['Profile'] : ['Signin', 'Signup'];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Account/${link}`} id="wd-course-home-link" className={`nav-link ${pathname.includes(link) ? 'list-group-item active border border-0' : 'list-group-item text-danger border border-0'}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
