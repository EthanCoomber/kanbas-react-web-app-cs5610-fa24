import React from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input id="wd-username" className="form-control mb-2" placeholder="username" />
      <input id="wd-password" className="form-control mb-2" placeholder="password" type="password" />
      <input id="wd-password" className="form-control mb-2" placeholder="verify password" type="password" />
      <Link className="btn btn-primary w-100" to="/Kanbas/Account/Profile">
        {' '}
        Sign up{' '}
      </Link>
      <br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
