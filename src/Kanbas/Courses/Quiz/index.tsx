import QuizControl from "./QuizControl";
import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import QuizOption from "./QuizOption";

export default function Quizzes() {
    const { cid } = useParams();
    // const quizzes = useSelector((state: any) => state.quizzes.quizzes);

    // if (!quizzes) {
    //     return <div>Loading...</div>; // or handle the error state
    // }

    return (
        <div id="wd-quizzes">
            <QuizControl />
            <hr />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary" style={{ display: "flex" }}>
                        <BsGripVertical className="me-2 fs-3" />
                        <GoTriangleDown className="me-2 fs-3" />
                        Assignment Quizzes
                    </div>

                    {/* {quizzes
                        .filter((quiz: any) => quiz.course === cid)
                        .map((quiz: any) => (
                            <li
                                key={quiz._id}
                                className="wd-lesson list-group-item p-3 ps-1"
                                style={{ borderLeft: '4px solid green' }}
                            >
                                <div className="d-flex align-items-center flex-grow-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <BsPencilSquare className="me-3" />
                                    <span className="d-inline-block">
                                        <a
                                            className="wd-assignment-list-item fw-bold"
                                            href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                                        >
                                            {quiz.title}
                                        </a>
                                        <div style={{ marginLeft: '0', fontSize: '0.8em' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{ color: 'red' }}>
                                                    <strong>Multiple Modules</strong>
                                                </div>
                                                <div style={{ marginLeft: '10px' }}>
                                                    | <strong>Not available until</strong> {quiz.available} |
                                                </div>
                                            </div>
                                            <div>
                                                <strong>Due</strong> {quiz.due} | {quiz.points} pts
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        ))} */}

            <li className="wd-lesson list-group-item p-3 ps-1" style={{borderLeft: '4px solid green'}}>
                        <div className="d-flex align-items-center flex-grow-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <BsPencilSquare className="me-3" />  
                        <span className="d-inline-block">
                            <a className="wd-assignment-list-item fw-bold"
                                href="#/Kanbas/Courses/1234/Quizzes/QuizNumber" >
                                A1
                            </a>
                            {/* href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}> */}
                            <div style={{marginLeft: '0', fontSize: '0.8em'}}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ color: 'red' }}>
                                    <strong>Multiple Modules</strong>
                                </div>
                                <div style={{ marginLeft: '10px' }}> | <strong>Not available until</strong> May 6 at 12:00am |</div>
                            </div>
                            <div>Due May 20 at 11:59pm | 100 pts</div>
                            </div>
                        </span>

                        <div style={{ marginLeft: "auto" }}>
                            <QuizOption/>
                        </div>

                        </div>





                    </li>
                </li>
            </ul>
        </div>
    );
}
