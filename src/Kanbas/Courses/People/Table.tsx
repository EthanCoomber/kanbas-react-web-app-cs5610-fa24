import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { findUsersForCourse } from '../client'; // Ensure this path is correct
import PeopleDetails from './Details';

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  const { cid } = useParams();
  const [usersEnrolled, setUsersEnrolled] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsersForCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        if (cid) {
          const enrolledUsers = await findUsersForCourse(cid);
          console.log('enrolledUsers', enrolledUsers);
          setUsersEnrolled(enrolledUsers);
        }
      } catch (err) {
        setError('Failed to fetch users for the course.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (cid) {
      fetchUsersForCourse();
    }
  }, [cid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const displayUsers = cid ? usersEnrolled : users;

  return (
    <div id="wd-people-table">
      <PeopleDetails />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
