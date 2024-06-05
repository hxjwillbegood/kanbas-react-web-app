
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function AssignmentEditor() {
    return (      

      <div className="wd-assignments-editor">
        <div className="col mb-4 ps-2">
          <label htmlFor="wd-name" className="row-sm-5 row-form-label mb-2">
            Assignment Name
          </label>
          <div className="row-sm-5 ">
            <input id="wd-name" className="form-control" value="A1"/>
          </div>
        </div>

      <div className= "wd-description ">
        <div className="col mb-4 ps-2">
          <div className="row-cols-sm-5 row-form-label">
            <textarea className="form-control" id="wd-description" rows={15} >
              The assignment is available online 
              Submit a link to the landing page of
              your web application runnng on Netlify. The landing page should include 
              the following: Your full name and section Links to each of the lab assignments
              Link to the Kanbas application Links to all relevant source code repositories
              The Kanbas application should include a link to nevigate back to the landing page.
            </textarea>
          </div>
        </div>
      </div>
        
        
        <div className={"row float-end"}>

          <div className="row mb-3 justify-content-end">
            <div className="col text-end">
              <label htmlFor="wd-group" className="col-form-label">
                Points
              </label>
            </div>
            <div className="row mb-3 col offset-sm">
              <input type="number" className="form-control" id="wd-points" value={100} />
            </div>
          </div>

          <div className="row mb-3 justify-content-end">
            <div className="col text-end">
              <label htmlFor="wd-group" className="col-form-label">
                Assignment Group
              </label>
            </div>
            <div className="row mb-3 col offset-sm">
              <select id="wd-group" className="form-select">
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

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="r6">
                    Text Entry </label> 
                  </div>
                </div>
              </div>


              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked/>
                    <label className="form-check-label" htmlFor="r6">
                    Website URL 
                    </label> 
                  </div> 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="r6">
                    Media Recordings 
                    </label> 
                  </div> 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="r6">
                    Student Annotation 
                    </label> 
                  </div> 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-10 offset-sm">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="r6">
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
              <label htmlFor="wd-group" className="col-sm-2 col-form-label">
                Assign
              </label>
            </div>
            <div className="card col">
              <div className="card-body mb-3">
                <label className="col-sm-2 col-form-label">Assign to</label>

                <div className="col mb-3">
                  <input id="wd-assign-to" className="form-control" value="everyone"/>
                </div>

                <label className="form-label ">Due</label>

                <div className="mb-3">
                  <input type="date" 
                  className="form-control" 
                  value="2024-05-06" />

                </div>

                <div className = "row"> 
                  <div className = "col">
                    <label htmlFor="wd-available-from">Available from</label>  
                  </div>
                  <div className = "col">
                    <label htmlFor="wd-available-from">Until</label>
                  </div>
                </div>

                <div className = "row ">
                  <div className = "col">
                    <input type = "date" className="form-control"  value={"2024-05-06"} /> 
                  </div>
                  <div className = "col">
                    <input type = "date" className="form-control"  value={"2024-05-20"} />
                  </div> 
                </div>
              </div> 
            </div>
          </div> 

          <hr></hr>
          <div>
            <div className="col float-end">
              <button type = "button" className="btn btn-lg btn-secondary me-2 ">Cancel</button>
              <button type ="submit" className="btn btn-lg btn-danger">Save</button>
            </div>
          </div>
        </div>

        </div>
  );}
  