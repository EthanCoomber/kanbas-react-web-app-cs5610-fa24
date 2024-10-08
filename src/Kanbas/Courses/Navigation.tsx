import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const links = ['Home', 'Modules', 'Piazza', 'Zoom', 'Assignments', 'Quizzes', 'Grades', 'People'];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Courses/1234/${link}`} key={link} id={`wd-course-${link}-link`} className={`nav-link ${pathname.includes(link) ? 'list-group-item active border border-0}' : 'list-group-item text-danger border border-0'}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
