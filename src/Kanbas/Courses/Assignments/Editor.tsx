import { MdOutlineCalendarMonth } from "react-icons/md";
import * as db from "../../Database";
import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import { updateAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function Editor() {
  const { cid, id } = useParams();
  const dispatch = useDispatch();
  const assignment = db.assignments.find(
    (assignment) => assignment.course === cid && assignment._id === id
  );

  const [assignmentData, setAssignmentData] = useState(
    assignment
      ? {
          title: assignment.title,
          description: assignment.description,
          points: assignment.points,
          available_from_date: assignment.available_from_date,
          due_date: assignment.due_date,
          until_date: assignment.until_date,
          due: assignment.due,
          available: assignment.available,
        }
      : {
          title: '',
          description: '',
          points: '',
          available_from_date: '',
          due_date: '',
          until_date: '',
          due: '',
          available: '',
        }
  );

  if (!assignment) {
    return <div>No assignment found for this course.</div>;
  }

  const handleSave = () => {
    dispatch(updateAssignment({
        ...db.assignments.find((assignment: any) => assignment._id === id),
        ...assignmentData
    }));
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Save the updated assignment data to the database or perform other actions
  //   console.log('Saved assignment data:', assignmentData);
  // };

  return (
    <form className="wd-assignments-editor">
      <div className="col mb-4 ps-2">
        <label htmlFor="wd-assignment-name" className="row-sm-5 row-form-label mb-2">
          Assignment Name
        </label>
        <div className="row-sm-5">
          <input
            type="text"
            className="form-control"
            id="wd-assignment-name"
            name="title"
            value={assignmentData.title}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="wd-description">
        <div className="col mb-4 ps-2">
          <div className="row-cols-sm-5 row-form-label">
            <textarea
              className="form-control"
              id="wd-description"
              rows={15}
              name="description"
              value={assignmentData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row float-end">
        <div className="row mb-3 justify-content-end">
          <div className="col text-end">
            <label htmlFor="wd-points" className="col-form-label">
              Points
            </label>
          </div>
          <div className="row mb-3 col offset-sm">
            <input
              type="text"
              className="form-control"
              id="wd-points"
              name="points"
              value={assignmentData.points}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col text-end">
            <label htmlFor="wd-group" className="col-form-label">
              Assignment Group
            </label>
          </div>
          <div className="row mb-3 col offset-sm">
            <select id="wd-group" className="form-select" name="assignmentGroup" onChange={handleInputChange}>
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col text-end mb-3">
            <label htmlFor="wd-group" className="col-form-label">
              Display Grade as
            </label>
          </div>
          <div className="row mb-3 col offset-sm">
            <select id="wd-group" className="form-select" name="displayGrade" onChange={handleInputChange}>
              <option>Percentage</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col text-end mb-3">
            <label htmlFor="wd-group" className="col-form-label">
              Submission Type
            </label>
          </div>

          <div className="card col mb-3">
            <div className="card-body">
              <div className="row mb-3 col offset-sm">
                <select id="wd-group" className="form-select" name="submissionType" onChange={handleInputChange}>
                  <option>Online</option>
                </select>
              </div>

              <div id="wd-submission-type-options">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="text-entry" />
                  <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="website-url" />
                  <label className="form-check-label" htmlFor="website-url">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="media-recordings" />
                  <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="student-annotation" />
                  <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="file-uploads" />
                  <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-end mb-5">
          <div className="col text-end">
            <label htmlFor="wd-assign-to" className="col-form-label">
              Assign
            </label>
          </div>
          <div className="card col">
            <div className="card-body mb-3">
              <label className="col-form-label">Assign to</label>
              <div className="col mb-3">
                <input id="wd-assign-to" className="form-control" value="everyone" readOnly />
              </div>

              <label className="form-label">Due</label>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="due_date"
                  value={assignmentData.due_date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="wd-available-from">Available from</label>
                </div>
                <div className="col">
                  <label htmlFor="wd-available-until">Until</label>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    name="available_from_date"
                    value={assignmentData.available_from_date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    name="until_date"
                    value={assignmentData.until_date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <div className="col float-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-lg btn-secondary me-2">
              Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
              onClick={handleSave} 
              className="btn btn-lg btn-danger">
              Save
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
