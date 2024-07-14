import { HiMagnifyingGlass } from "react-icons/hi2";
import {FaPlus} from "react-icons/fa6";
import { useParams,Link} from "react-router-dom";

export default function AssignmentControl(){
    const { cid } = useParams();
    return(
        <div id="wd-assignment-controls" style={{ display: "flex" }}>
            <div className="wd-search-assignment input-group me-1" style={{ width: "50%" }}>
                <span className="input-group-text">
                    <HiMagnifyingGlass/>
                </span>
                <input 
                       className="form-control"
                       type="text" 
                       placeholder="Search..."/>
            </div>

            <div className="d-line me-1" style={{ marginLeft: "auto" }} >
                <button id="wd-collepse-all" className="btn btn-lg btn-secondary">
                <FaPlus className="position-relative me-1" style={{ bottom: "1px" }}/>
                Group
                </button>
            </div>

            <div className="d-line me-1" >
                <Link id="wd-add-assignment"
                    className="btn btn-lg btn-danger me-1"  key={`${cid}/new`} to={`${cid}/new`}>
                    <FaPlus className="position-relative me-1" style={{bottom: "1px"}}/>
                    Assignment
                </Link>
            </div>


        </div>
    );
}