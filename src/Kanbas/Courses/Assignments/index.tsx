import AssignmentControl from "./AssignmentControl";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import  AssignmentsControlButtons from "./AssignmentsControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons"; 
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setAssignments, deleteAssignment,} from "./reducer";
import DeleteAssignmentControl from "./DeleteAssignmenControl";
import * as client from "./client";

export default function Assignments() {
  const { cid} = useParams();
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const handleDeleteClick = (assignmentId: string) => {
      setAssignmentToDelete(assignmentId);
      setShowConfirmDialog(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
    setAssignmentToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (assignmentToDelete) {
      try {
        await client.deleteAssignment(assignmentToDelete);
        dispatch(deleteAssignment(assignmentToDelete));
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
    setShowConfirmDialog(false);
    setAssignmentToDelete(null);
  };

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };

    fetchAssignments();
  }, [cid, dispatch]);

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
            .filter((assignment:any) => assignment.course === cid)
            .map((assignment:any) => (
              <li key={assignment.title} className="wd-lesson list-group-item p-3 ps-1" style={{ borderLeft: '4px solid green' }}>
                <div className="d-flex align-items-center flex-grow-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsPencilSquare className="me-3" />
                  <span className="d-inline-block">
                    <a className="wd-assignment-list-item fw-bold" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </a>
                    <div style={{ marginLeft: '0', fontSize: '0.8em' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ color: 'red' }}>
                          <strong>Multiple Modules</strong>
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                          | <strong>Not available until</strong> {assignment.available}|
                        </div>
                      </div>
                      <div> <strong>Due</strong> {assignment.due} | {assignment.points} pts</div>
                    </div>
                  </span>
                  <div style={{ marginLeft: "auto" }}>
                    <LessonControlButtons />
                  
                    <DeleteAssignmentControl onDeleteClick={() => handleDeleteClick(assignment._id)}/>
                  </div>
                </div>
              </li>
            ))}
        </li>
      </ul>

      {showConfirmDialog && (
                <div className="modal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to remove this assignment?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        onClick={handleCancelDelete}>Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
}