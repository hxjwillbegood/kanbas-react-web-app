import { HiMagnifyingGlass } from "react-icons/hi2";
import {FaPlus} from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import QuizEditor from "./QuizEditor";

export default function QuizControl({ quizName, setQuizName, addQuiz }:
    {  quizName: string; setQuizName: (title: string) => void; addQuiz: () => void; }) {
    return(
        <div id="wd-quiz-controls" style={{ display: "flex" }}>
            <div className="wd-search-quiz input-group me-1" style={{ width: "50%" }}>
                <span className="input-group-text">
                    <HiMagnifyingGlass/>
                </span>
                <input 
                       className="form-control"
                       type="text" 
                       placeholder="Search for Quiz"/>
            </div>

            {/* <div className="d-line me-1" style={{ marginLeft: "auto" }} >
                <button id="wd-collepse-all" className="btn btn-lg btn-secondary">
                <FaPlus className="position-relative me-1" style={{ bottom: "1px" }}/>
                Group
                </button>
            </div> */}

            <div className="d-line me-1" style={{ marginLeft: "auto" }} >
            <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end"
                data-bs-toggle="modal" data-bs-target="#wd-add-quiz-dialog">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </button>
            </div>

            <div className="d-line me-1" >
                <button id="wd-view-progress" className="btn btn-lg  btn-secondary">
                    <IoEllipsisVertical className="fs-4" />
                </button>
            </div>

            <QuizEditor dialogTitle="Add Quiz" quizName={quizName}
                    setQuizName={setQuizName} addQuiz={addQuiz} />
        </div>
    );
}