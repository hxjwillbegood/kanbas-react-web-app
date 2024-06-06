import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

export function AssignmentsControlButtons() {
  return (
    <div className="d-flex align-items-center justify-content-end " style={{ marginLeft: 'auto' }}>
      <span className="wd-rounded-corners-all-around wd-border-black wd-border-solid px-2 me-2 " >
        40% of Total
      </span>
      <GoPlus className="me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}



