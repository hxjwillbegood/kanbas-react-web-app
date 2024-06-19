import { MdOutlineCalendarMonth } from "react-icons/md";
import * as db from "../../Database";
import { useParams, Link } from "react-router-dom";


export default function Editor() {
  const { cid, asmt } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment.course === cid && assignment._id === asmt
  );

  if (!assignment) {
    return <div>No assignment found for this course.</div>;
  }

  const submissionsType = assignment.submissions;

  return (
    <div className="wd-assignments-editor">
      <div className="col mb-4 ps-2">
        <label htmlFor="wd-name" className="row-sm-5 row-form-label mb-2">
          Assignment Name
        </label>
        <div className="row-sm-5">
          <input
            id="wd-name"
            className="form-control"
            value={assignment.assignment_name}
            readOnly
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
              readOnly
            >
              {assignment.assignment_description}
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
              type="number"
              className="form-control"
              id="wd-points"
              value={assignment.point}
              readOnly
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
              <option>{assignment.assignmentGroup}</option>
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
              <option>{assignment.gradeDisplay}</option>
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
                  <option>{assignment.submissionType}</option>
                </select>
              </div>

              {submissionsType && submissionsType.map((submission) => (
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={submission.checked === "checked"}
                        readOnly
                      />
                      <label className="form-check-label">
                      {/* <label className="form-check-label" htmlFor={`submission-${index}`}> */}
                        {submission.type}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
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
                <input id="wd-assign-to" className="form-control" value={assignment.assign} />
              </div>

              <label className="form-label">Due</label>

              <div className="mb-3">
                <input type="date" className="form-control" value={assignment.due_date_} />
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
                    value={assignment.available_from}
                    readOnly
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    className="form-control"
                    value={assignment.available_until}
                    readOnly
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
            <button type="submit" className="btn btn-lg btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
