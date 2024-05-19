export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description"
        style={{ width: "300px", height: "200px" }}
        >
          The assignment is available online 
          Submit a link to the landing page of
          your web application runnng on Netlify. The landing page should include 
          the following: Your full name and section Links to each of the lab assignments
          Link to the Kanbas application Links to all relevant source code repositories
          The Kanbas application should include a link to nevigate back to the landing page.
        </textarea>
        <br />
        
        <table>
          <tr>
            <td align="right" valign="top" >
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
        <br />

          <tr>
            <td align="right" valign="top" >
              <label htmlFor="wd-group">Assgnment Group</label>
            </td>
            <td>
              <select><option>ASSIGNMENTS</option></select>
            </td>
          </tr>
        <br />

          <tr>
            <td align="right" valign="top" >
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select><option>Percentage</option></select>
            </td>
          </tr>
        <br />

          <tr>
            <td align="right" valign="top" >
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>

            <td>
              <select><option>Online</option></select>  
            </td>
          
          </tr>
          <br/>

          <tr >
            <td align="right" valign="top" >
              <label htmlFor="wd-submission-type"></label>
            </td>

            <label>Online Entry Options</label> <br />

            <input type = "checkbox" name = "check entry" id = "wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />

            <input type = "checkbox" name = "check entry" id = "wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>
            <br />

            <input type = "checkbox" name = "check entry" id = "wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />

            <input type = "checkbox" name = "check entry" id = "wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input type = "checkbox" name = "check entry" id = "wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br /> 
          </tr>
        
        <br />

        <tr>
          Assign
          <td >
            <tr>
            <label htmlFor="wd-assign-to" >Assign to</label>
            </tr>
            <tr>
            <input id="wd-assign-to" value={"Everyone"} />
            </tr>
            <br/>

            <tr>
            <label htmlFor="wd-due-date">Due</label>
            </tr>
            <tr>
            <input type = "date" id="wd-due-date" value={"2024-05-13"} />
            </tr>
            <br/>

            <tr>
              <td>
                <label htmlFor="wd-available-from">Available from</label>  
              </td>
              <td>
                <label htmlFor="wd-available-from">Until</label>
              </td>
            </tr>

            <tr>
              <td>
                <input type = "date" id="wd-available-until" value={"2024-05-06"} /> 
              </td>
              <td>
                <input type = "date" id="wd-available-until" value={"2024-05-20"} />
              </td>
              
            </tr>

            <br/>
            
          </td>
  

          <br/>
          
        </tr>
        </table>

        <hr></hr>

        <table>
          <tr>
            <td>
              <button>Cancel</button>
              <button>Save</button>
            </td>
          </tr>
        </table>

      </div>
  );}
  