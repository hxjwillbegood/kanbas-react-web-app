import { MdOutlineCalendarMonth } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import { title } from "process";
import * as client from "./client";


export default function AssignmentEditor() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const [assignmentData, setAssignmentData] = useState({
    title: "New Assignment",
    description: "New Assignment Description",
    points: "100",
    available_from_date: "2024-07-01",
    due_date: "2024-07-17",
    until_date: "2024-07-01",
    due: "June 17 at 12:00 pm",
    available: "June 1 at 12:00pm", 
  });

  const handleSave = async () => {
    const newAssignment = {
      ...assignmentData,
      course: cid,
      _id: new Date().getTime().toString(),
    };

    try {
      const createdAssignment = await client.createAssignment(cid as string, newAssignment);
      dispatch(addAssignment(createdAssignment));
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  return (
    
    <div className="wd-assignments-editor">   
      <div className="col mb-4 ps-2">
        <label htmlFor="wd-name" className="row-sm-5 row-form-label mb-2">
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
              name="description"
              rows={15}
              onChange={handleInputChange}
            >
              {assignmentData.description}
            </textarea>
          </div>
        </div>
      </div>

      <div className={"row float-end"}>
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
              name = "points"
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
            <select id="wd-group" className="form-select" >
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
            <select id="wd-group" className="form-select" >
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
                <select id="wd-group" className="form-select" >
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
            <label htmlFor="wd-group" className="col-sm-2 col-form-label">
              Assign
            </label>
          </div>
          <div className="card col">
            <div className="card-body mb-3">
              <label className="col-sm-2 col-form-label">Assign to</label>

              <div className="col mb-3">
                <input id="wd-assign-to" className="form-control" value ="everyone" />
              </div>

              <label className="form-label">Due</label>

              <div className="mb-3">
                <input type="date" 
                className="form-control" 
                name = "due_date"
                value={assignmentData.due_date} 
                onChange={handleInputChange}/>
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
                    name = "available_from_date"
                    className="form-control"
                    value={assignmentData.available_from_date}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    name = "until_date"
                    value={assignmentData.until_date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>
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
    </div>
  );
}