import { GradesControlButtons } from "./GradesControlButtons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiFilter } from "react-icons/fi";
import "./index.css";
import { useParams } from "react-router-dom";

import users from "../../Database/users.json";
import enrollments from "../../Database/enrollments.json";
import grades from "../../Database/grades.json";
import assignments from "../../Database/assignments.json";

export default function Grades() {
  const { cid } = useParams();

  // Filter enrollments by the selected course
  const enrolledUsers = enrollments.filter(enrollment => enrollment.course === cid);
  const enrolledUserIDs = enrolledUsers.map(enrollment => enrollment.user);

  // Filter assignments by the selected course
  const assignmentList = assignments.filter(assignment => assignment.course === cid);
  const assignmentNames = assignmentList.map(assignment => assignment._id);

  let students = [];
  for (let i = 0; i < enrolledUserIDs.length; i++) {
    const student = users.find(user => user._id === enrolledUserIDs[i]);

    if (student) {
      const fullName = `${student.firstName} ${student.lastName}`;

      // Filter grades for each student and each assignment
      const studentGrades = assignmentList.map(assignment => {
        const gradeData = grades.find(grade => grade.student === enrolledUserIDs[i] && grade.assignment === assignment._id);
        return {
          assignmentName: assignment._id,
          grade: gradeData ? gradeData.grade : '-' // Default to '-' if no grade data is found
        };
      });

      const studentData = {
        studentID: enrolledUserIDs[i],
        studentName: fullName,
        studentGrades: studentGrades // Assuming studentGrades contains grade objects
      };
      
      students.push(studentData);
    }
  }

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
              {assignmentNames.map(assignment => (
                <th key={assignment}>{assignment} <br /> Out of 100%</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.studentID}>
                <td>{student.studentName}</td>
                {student.studentGrades.map(grade => (
                  <td >{grade.grade}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
