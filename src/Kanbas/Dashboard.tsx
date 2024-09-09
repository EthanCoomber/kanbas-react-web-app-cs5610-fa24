import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" alt="react" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">Full Stack software developer</p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/science.jpg" alt="science" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/Science/Home">
              Science
            </Link>
            <p className="wd-dashboard-course-title">Intro to Science</p>
            <Link to="/Kanbas/Courses/Science/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <div className="wd-dashboard-course">
            <img src="/images/history.jpg" alt="history" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/History/Home">
                History
              </Link>
              <p className="wd-dashboard-course-title">American History</p>
              <Link to="/Kanbas/Courses/History/Home"> Go </Link>
            </div>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <div className="wd-dashboard-course">
            <img src="/images/math.jpg" alt="math" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                Math
              </Link>
              <p className="wd-dashboard-course-title">Advanced Mathematics</p>
              <Link to="/Kanbas/Courses/Math/Home"> Go </Link>
            </div>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <div className="wd-dashboard-course">
            <img src="/images/english.jpg" alt="english" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/English/Home">
                English
              </Link>
              <p className="wd-dashboard-course-title">English Literature</p>
              <Link to="/Kanbas/Courses/English/Home"> Go </Link>
            </div>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <div className="wd-dashboard-course">
            <img src="/images/cs.jpg" alt="cs" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/CS/Home">
                Computer Science
              </Link>
              <p className="wd-dashboard-course-title">Intro to Computing</p>
              <Link to="/Kanbas/Courses/CS/Home"> Go </Link>
            </div>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <div className="wd-dashboard-course">
            <img src="/images/stats.jpg" alt="stats" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/Stats/Home">
                Statistics
              </Link>
              <p className="wd-dashboard-course-title">Advanced Statistics</p>
              <Link to="/Kanbas/Courses/Stats/Home"> Go </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
