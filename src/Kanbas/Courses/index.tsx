import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import AddAssignmentEditor from "./Assignments/AddAssignmentEditor";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router";
import {FaAlignJustify} from "react-icons/fa";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import Quizzes from "./Quiz/index";
import QuizDetails from "./Quiz/QuizDetails";
import QuizDetailsEditor from "./Quiz/QuizDetailsEditor";
import QuizQuestionEditor from "./Quiz/QuizQuestionEditor";
import QuizQuestionDetailsEditor from "./Quiz/QuizQuestionDetailsEditor";

export default function Courses({courses}: { courses: any[] }) {

    const {cid} = useParams();

    const course = courses.find((course) => course.number === cid);
    const {pathname} = useLocation();

    return (
        // <Provider store={store}>
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"/>
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr/>

            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation/>
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Modules" element={<Modules/>}/>
                        <Route path="/Assignments" element={<Assignments/>}/>
                        <Route path="/Grades" element={<Grades/>}/>
                        <Route path="/Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="/Assignments/:cid/:id" element={<AddAssignmentEditor />} />
                        <Route path="/People" element={<PeopleTable />} />
                        <Route path="/People/:uid" element={<PeopleTable />} />
                        <Route path="/Quizzes" element={<Quizzes />} />
                        <Route path="/Quizzes/:id" element={<QuizDetails />} />
                        <Route path="/Quizzes/:id/QuizDetailsEditor" element={<QuizDetailsEditor />} />
                        <Route path="/Quizzes/:id/QuizQuestionEditor" element={<QuizQuestionEditor />} />
                        {/* Quizzes/QZ001/undefined */}
                        <Route path="/Quizzes/:id/:cid" element={<QuizQuestionDetailsEditor />} />
                    </Routes>
                </div>
            </div>
        </div>
        
    );
}