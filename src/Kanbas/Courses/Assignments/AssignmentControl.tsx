import {FaPlus} from "react-icons/fa6";
import {HiMagnifyingGlass} from "react-icons/hi2";
import {useParams} from "react-router";

export default function AssignmentControls() {
    const {cid} = useParams();

    return (
        <div id="wd-assignment-controls" className="d-flex justify-content-between">
            <div className="wd-search-assignment input-group me-1">
                <span className="input-group-text">
                    <HiMagnifyingGlass/>
                </span>
                <input id="input-group-text"
                       className="form-control"
                       type="text" placeholder="Search..."/>
            </div>

            <div className="input-group me-1 justify-content-end">
                <div>
                    <button id="wd-add-assignment-group"
                            className="btn btn-lg btn-secondary me-1">
                        <FaPlus className="position-relative me-1" style={{bottom: "1px"}}/>
                        Group
                    </button>
                </div>
                <div>

                    <a id="wd-add-assignment"
                       className="btn btn-lg btn-danger me-1" href={`#/Kanbas/Courses/${cid}/Assignments/new`}>
                        <FaPlus className="position-relative me-1" style={{bottom: "1px"}}/>
                        Assignment
                    </a>
                </div>
            </div>

        </div>
    );
}