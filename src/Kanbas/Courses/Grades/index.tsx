import { GradesControlButtons } from "./GradesControlButtons";
import {HiMagnifyingGlass} from "react-icons/hi2";
import {FiFilter} from "react-icons/fi";
import "./index.css";


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
            
            <div id="wd-css-responsive-tables" className="table-responsive">
                <table className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>A1 SETUP <br/> Out of 100%</th>
                            <th>A2 HTML <br/> Out of 100%</th>
                            <th>A3 CSS <br/> Out of 100%</th>
                            <th>A4 Bootstrap <br/> Out of 100%</th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td className="text-danger">Jane Adams</td>
                            <td>100%</td>
                            <td><input className="form-control" placeholder="96.95%"/></td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr >
                            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                            <td>100%</td>
                            <td>96.67%</td>
                            <td>98.37%</td>
                            <td>98.99%</td>
                        </tr>

                        <tr>
                            <td className="text-danger">Selina H</td>
                            <td>75%</td>
                            <td>95%</td>
                            <td>100%</td>
                            <td>85%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

      
    );
}
