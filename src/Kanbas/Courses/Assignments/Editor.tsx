import * as db from "../../Database";
import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, asmt } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id === asmt);



  if (!assignment) {
    return <div>No assignment found for this course.</div>;
  }

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
              defaultValue={assignment.assignment_description}
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
              type="number"
              className="form-control"
              id="wd-points"
              value={assignment.points}
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
            <select id="wd-group" className="form-select" defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col text-end mb-3">
            <label htmlFor="wd-grade-display" className="col-form-label">
              Display Grade as
            </label>
          </div>
          <div className="row mb-3 col offset-sm">
            <select id="wd-grade-display" className="form-select" defaultValue="Percentage">
              <option>Percentage</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col text-end mb-3">
            <label htmlFor="wd-submission-type" className="col-form-label">
              Submission Type
            </label>
          </div>

          <div className="card col mb-3">
            <div className="card-body">
              <div className="row mb-3 col offset-sm">
                <select id="wd-submission-type" className="form-select" defaultValue="Online">
                  <option>Online</option>
                </select>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="text-entry" />
                    <label className="form-check-label" htmlFor="text-entry">
                      Text Entry
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="website-url" checked />
                    <label className="form-check-label" htmlFor="website-url">
                      Website URL
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="media-recordings" />
                    <label className="form-check-label" htmlFor="media-recordings">
                      Media Recordings
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="student-annotation" />
                    <label className="form-check-label" htmlFor="student-annotation">
                      Student Annotation
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="file-uploads" />
                    <label className="form-check-label" htmlFor="file-uploads">
                      File Uploads
                    </label>
                  </div>
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
                <input id="wd-assign-to" className="form-control" defaultValue="everyone" />
              </div>
              <label className="form-label">Due</label>
              <div className="mb-3">
                <input type="date" className="form-control" defaultValue="2024-05-06" />
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
                  <input type="date" className="form-control" defaultValue="2024-05-06" />
                </div>
                <div className="col">
                  <input type="date" className="form-control" defaultValue="2024-05-20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <div className="col float-end">
            <button type="button" className="btn btn-lg btn-secondary me-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-lg btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}