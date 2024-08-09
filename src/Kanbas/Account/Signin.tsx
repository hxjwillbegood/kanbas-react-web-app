import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signin = async () => {
    try {
          const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  // const currentUser = useSelector((state: any) => state.userState.currentUser);

  // const currentUserCourses  = currentUser.courses;

  const [role, setRole] = useState("");
  return (
    <div id="wd-signin-screen">
      <h5>myNortheastern username</h5>
      <input id="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} className="form-control mb-2"  />
      <h5>myNortheastern password</h5>
      <input id="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} className="form-control mb-2" type="password" />
      <h5>Role</h5>
      <select value={role} onChange={(e) =>setRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role" >
          <option value="">All Roles</option> 
          <option value="STUDENT">Students</option>  
          <option value="FACULTY">Faculty</option>
      </select>
      <br></br><br/>
      
      <button id="wd-signin-btn" onClick={signin} className="btn btn-danger w-100"> Sign in </button>
      
    </div>
  );
}

    // <div id="wd-signin-screen">
    //   <h1>Sign in</h1>
    //   {error && <div className="wd-error alert alert-danger">{error}</div>}
    //   <input id="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
    //     value={credentials.username} className="form-control mb-2" placeholder="username" />
    //   <input id="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
    //     value={credentials.password} className="form-control mb-2" placeholder="password" type="password" />
    //   <button id="wd-signin-btn" onClick={signin} className="btn btn-primary w-100"> Sign in </button>
    //   <br />
    //   <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    // </div>
