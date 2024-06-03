import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { GoPlus } from "react-icons/go";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
    
      <GoPlus />
    
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
