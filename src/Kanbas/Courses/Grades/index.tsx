import { GradesControlButtons } from "./GradesControlButtons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiFilter } from "react-icons/fi";
import "./index.css";
import { useParams } from "react-router-dom";

import users from "../../Database/users.json";
import enrollments from "../../Database/enrollments.json";
import grades from "../../Database/grades.json";

export default function Grades() {
  const { cid } = useParams();

  // Filter enrollments by the selected course,
  // filter this first since this is the key to three sets of data
  const enrolledUsers = enrollments
    .filter(enrollment => enrollment.course === cid)
    .map(enrollment => enrollment.user);

  // Get the user details for the enrolled users
  const enrolledUserDetails = users.filter(user => enrolledUsers.includes(user._id));

  // Get grades for the enrolled students and the selected course
  const courseGrades = grades.filter(grade => enrolledUsers.includes(grade.student));

  // Extract unique assignments from the course grades data
  const assignments = Array.from(new Set(courseGrades.map(grade => grade.assignment)));

  return (
    <div>
      <div className="row mb-3">
        <div className="col text-right">
          <GradesControlButtons />
        </div>
      </div>

      <div className="row">
        <div className="col mb-1">
          <label htmlFor="wd-available-from">Student Names</label>
        </div>
        <div className="col mb-1">
          <label htmlFor="wd-available-until">Assignment Names</label>
        </div>
      </div>

      <div className="row">
        <div className="col offset-sm">
          <span className="mb-3 col offset-sm input-group-text">
            <HiMagnifyingGlass className="me-1" />

            <input
              id="wd-group"
              className="form-select"
              placeholder="Students Search"
            />
          </span>
        </div>
        <div className="col offset-sm">
          <span className="mb-3 col offset-sm input-group-text">
            <HiMagnifyingGlass className="me-1" />

            <input
              id="wd-group"
              className="form-select"
              placeholder="Assignments Search"
            />
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-4">
          <button type="button" className="btn btn-secondary me-2">
            <FiFilter className="me-1" />
            Apply Filters
          </button>
        </div>
      </div>

      <div id="wd-css-responsive-tables" className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map(assignment => (
                <th key={assignment}>{assignment} <br /> Out of 100%</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledUserDetails.map(user => (
              <tr key={user._id}>
                <td>{user.firstName} {user.lastName}</td>
                {assignments.map(assignment => {
                  const grade = courseGrades.find(grade => grade.student === user._id && grade.assignment === assignment);
                  return (
                    <td key={assignment}>{grade ? grade.grade : 'N/A'}%</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
