import { GradesControlButtons } from "./GradesControlButtons";
import {HiMagnifyingGlass} from "react-icons/hi2";
import {FiFilter} from "react-icons/fi";

export default function Grades() {
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
                        <HiMagnifyingGlass className = "me-1"/>
                    
                    <input id="wd-group" 
                            className="form-select" 
                            placeholder="Students Search"     
                    />
                    </span>
                </div>
                <div className="col offset-sm">
                    <span className="mb-3 col offset-sm input-group-text">
                        <HiMagnifyingGlass className = "me-1"/>
                    
                    <input id="wd-group" 
                            className="form-select" 
                            placeholder="Assignments Search"     
                    />
                    </span>
                </div>
            </div>



            <div className="row">
                <div className="col-12 mb-4">
                    <button type="button" className="btn btn-secondary me-2">
                        <FiFilter className="me-1"/>
                        Apply Filters
                    </button>
                </div>
            </div>

            <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                    <thead>
                        <tr className="table">
                            <th>Srudent Name</th>
                            <th>A1 SETUP Out of 100%</th>
                            <th>A2 HTML Out of 100%</th>
                            <th>A3 CSS Out of 100%</th>
                            <th>A4 Bootstrap Out of 100%</th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr className="table">
                        <td>Eva H</td>
                        <td>100%</td>
                        <td>95%</td>
                        <td>85%</td>
                        <td>85%</td>
                    </tr>
                    <tr className="table">
                        <td>Kate H</td>
                        <td>80%</td>
                        <td>95%</td>
                        <td>85%</td>
                        <td>85%</td>
                    </tr>
                    <tr className="table">
                        <td>Selina H</td>
                        <td>75%</td>
                        <td>95%</td>
                        <td>100%</td>
                        <td>85%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>

        </div>
    );
}
