import {IoEllipsisVertical} from "react-icons/io5";
import {FaPlus} from "react-icons/fa6";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="rounded-pill
                             border border-1
                             border-dark
                             me-2 px-2 py-1">
                            40% of Total
                        </span>
            <FaPlus className="me-1 fs-4"/>
            <IoEllipsisVertical className="me-1 fs-4"/>
        </div>
    )
}