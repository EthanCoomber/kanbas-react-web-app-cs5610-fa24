import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" className="form-control mb-2" placeholder="username" value="alice" />
      <input id="wd-password" className="form-control mb-2" placeholder="123" type="password" />
      <input id="wd-firstname" className="form-control mb-2" value="Alice" placeholder="First Name" />
      <input id="wd-lastname" className="form-control mb-2" value="Wonderland" placeholder="Last Name" />
      <input id="wd-dob" className="form-control mb-2" value="2000-01-01" type="date" />
      <input id="wd-email" className="form-control mb-2" value="alice@wonderland" type="email" />
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
