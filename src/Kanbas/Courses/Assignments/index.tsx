import AssignmentControl from "./AssignmentControl";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { AssignmentsControlButtons } from "./AssignmentsControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons"; 
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid, asmt } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentControl /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary" style={{ display: "flex" }}>
            <BsGripVertical className="me-2 fs-3" />
            <GoTriangleDown className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentsControlButtons />
          </div>
          {assignments
            .filter((assignment) => assignment.course === cid)
            .map((assignment) => (
              <li key={assignment.assignment_name} className="wd-lesson list-group-item p-3 ps-1" style={{ borderLeft: '4px solid green' }}>
                <div className="d-flex align-items-center flex-grow-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsPencilSquare className="me-3" />
                  <span className="d-inline-block">
                    <a className="wd-assignment-list-item fw-bold" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment.assignment_name}`}>
                      {assignment.assignment_name}
                    </a>
                    <div style={{ marginLeft: '0', fontSize: '0.8em' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ color: 'red' }}>
                          <strong>{assignment.module_type}</strong>
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                          | <strong>{assignment.not_available}</strong> {assignment.not_available_date} |
                        </div>
                      </div>
                      <div>{assignment.due} {assignment.due_date} | {assignment.points}</div>
                    </div>
                  </span>
                  <div style={{ marginLeft: "auto" }}>
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
            ))}
        </li>
      </ul>
    </div>
  );
}
