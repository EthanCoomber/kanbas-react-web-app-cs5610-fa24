import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" alt="react" style={{ height: '150px', width: '100%', overflow: 'hidden' }} width="100%" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/Science/Home">
                <img src="/images/science.jpg" alt="react" style={{ height: '150px', width: '100%', overflow: 'hidden' }} width="100%" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">Science</h5>
                  <p className="card-text">Intro to Science</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/History/Home">
                <img src="/images/history.jpg" style={{ height: '150px', width: '100%', overflow: 'hidden' }} alt="react" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">History</h5>
                  <p className="card-text">American History</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/Math/Home">
                <img src="/images/math.jpg" style={{ height: '150px', width: '100%', overflow: 'hidden' }} alt="react" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">Math</h5>
                  <p className="card-text">Advanced Mathematics</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/English/Home">
                <img src="/images/english.jpg" style={{ height: '150px', width: '100%', overflow: 'hidden' }} alt="react" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">English</h5>
                  <p className="card-text">English Literature</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/CS/Home">
                <img src="/images/cs.jpg" style={{ height: '150px', width: '100%', overflow: 'hidden' }} alt="react" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">Computer Science</h5>
                  <p className="card-text">Intro to Computing</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: '250px' }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/CS/Home">
                <img src="/images/stats.jpg" style={{ height: '150px', width: '100%', overflow: 'hidden' }} alt="react" />
                <div>
                  <h5 className="wd-dashboard-course-title card-title">Statistics</h5>
                  <p className="card-text">Advanced Statistics</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
