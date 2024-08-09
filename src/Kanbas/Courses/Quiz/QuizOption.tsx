import GreenCheckmark from "./GreenCheck";
import { IoEllipsisVertical } from "react-icons/io5";
import "./index.css"

 
export default function QuizOption() {
    return (
        <div className="button-container">
            <button className="fs-4 btn btn-lg" >
                <GreenCheckmark />
            </button> 

            <div className="dropdown d-inline me-1 float-end">
                <button className="fs-4 btn btn-lg" type="button" data-bs-toggle="dropdown">
                    <IoEllipsisVertical/>
                </button>
             
            <ul className="dropdown-menu">
                <li>
                    <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                        Edit
                    </a>
                </li>
                <li>
                    <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                        Delete
                    </a>
                </li>
                <li>
                    <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                        Publish
                    </a>
                </li>

            </ul>
            </div>
        </div>
    );
}
