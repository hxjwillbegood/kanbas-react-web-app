import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaCircleUser,FaPlus } from "react-icons/fa6";
import { useParams, } from "react-router";
import PeopleDetials from "./Details";
import { Link, useNavigate } from "react-router-dom";
export default function PeopleTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const { uid, cid } = useParams();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div id="wd-people-table">
        <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
            <FaPlus className="me-2" />
            People
        </button>
        <PeopleDetials fetchUsers={fetchUsers}/>
        <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                className="form-control float-start w-25 me-2 wd-filter-by-name" />
        <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role" >

        <option value="">All Roles</option>        
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>     
        <option value="FACULTY">Faculty</option>
      </select>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
            <td className="wd-full-name text-nowrap" >
            <span className="wd-user-pic">
                <FaCircleUser
                    style={{ fontSize: '24px' }}
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/People/${user._id}`)}
                />
            </span>
                <Link to = {`/Kanbas/Courses/${cid}/People/${user._id}`}>
                    <span className="wd-first-name"> {user.firstName} </span>
                    <span className="wd-last-name">{user.lastName}</span>
                </Link>
            </td>
            <td className="wd-email">{user.email}</td>
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
