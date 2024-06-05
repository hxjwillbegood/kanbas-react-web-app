import AssignmentControl from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { AssignmentsControlButtons } from "./AssignmentsControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons"; 
import { BsPencilSquare } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-assignments" >

      <AssignmentControl/><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary" style={{ display: "flex" }}>
            <BsGripVertical className="me-2 fs-3" />
            <GoTriangleDown className="me-2 fs-3"/>
            ASSIGNMENTS
            <AssignmentsControlButtons />  
          </div >

          <li className="wd-lesson list-group-item p-3 ps-1" style={{borderLeft: '4px solid green'}}>
            <div className="d-flex align-items-center flex-grow-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3" />  
              <span className="d-inline-block">
                <a className="wd-assignment-list-item fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    A1
                </a>
                <div style={{marginLeft: '0'}}>
                  <div>Multiple Modules | Not available until May 6 at 12:00am |</div>
                  <div>Due May 20 at 11:59pm | 100 pts</div>
                </div>
              </span>

              <div style={{marginLeft: "auto"}}>
                <LessonControlButtons />
              </div>

            </div>

          </li>

          <li className="wd-lesson list-group-item p-3 ps-1" style={{borderLeft: '4px solid green'}}>
            <div className="d-flex align-items-center flex-grow-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3" />  
              <span className="d-inline-block">
                <a className="wd-assignment-list-item fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    A2
                </a>
                <div style={{marginLeft: '0'}}>
                  <div>Multiple Modules | Not available until May 6 at 12:00am |</div>
                  <div>Due May 27 at 11:59pm | 100 pts</div>
                </div>
              </span>

              <div style={{marginLeft: "auto"}}>
                <LessonControlButtons />
              </div>

            </div>
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1" style={{borderLeft: '4px solid green'}}>
            <div className="d-flex align-items-center flex-grow-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsPencilSquare className="me-3" />  
              <span className="d-inline-block">
                <a className="wd-assignment-list-item fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    A3
                </a>
                <div style={{marginLeft: '0'}}>
                  <div>Multiple Modules | Not available until May 6 at 12:00am |</div>
                  <div>Due May 13 at 11:59pm | 100 pts</div>
                </div>
              </span>

              <div style={{marginLeft: "auto"}}>
                <LessonControlButtons />
              </div>

            </div>
          </li>

        </li>   
      </ul>
    
    </div>
);}
  