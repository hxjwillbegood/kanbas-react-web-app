import QuizControl from "./QuizControl";
import { GoTriangleDown } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import QuizOption from "./QuizOption";
import {setQuizzes, addQuiz, deleteQuiz} from "./reducer";
import * as client from "./client";
import React, { useState, useEffect } from "react";
import { RxRocket } from "react-icons/rx";
import GreenCheckmark from "./GreenCheck";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Quizzes() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const [quizName, setQuizName] = useState("");

    //set quizzes in the reducer
    const fetchQuizzes = async () => {
    
        const quizzes = await client.findQuizzesForCourse(cid as string);
        
        dispatch(setQuizzes(quizzes));
    };
    
    //get the quizzes from the reducer
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

    const createQuiz= async (quiz: any) => {
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
    };

    const handleDelete = async (quizNumber: string, quizId:string) => {
        try {
            await client.deleteQuiz(cid as string, quizNumber);
            dispatch(deleteQuiz(quizId));  
        } catch (error) {
            console.error("Error deleting quiz:", error);
        }
    };

    

    useEffect(() => {
        fetchQuizzes();
      }, []);

    return (
        <div id="wd-quizzes">
            <QuizControl 
                quizName={quizName}
                setQuizName={setQuizName}
                addQuiz={() => {
                    createQuiz({quizTitle: quizName, course: cid})
                    setQuizName("");
                }}
            
            />
            <hr />
            <ul id="wd-quizzes" className="list-group rounded-0">
                <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary" style={{ display: "flex" }}>
                        {/* <BsGripVertical className="me-2 fs-3" /> */}
                        <GoTriangleDown className="me-2 fs-3" />
                        Assignment Quizzes
                    </div>

                    {quizzes
                        .filter((quiz: any) => quiz.course === cid)
                        .map((quiz: any) => (
                            <li
                                key={quiz._id}
                                className="wd-lesson list-group-item p-3 ps-1"
                                style={{ borderLeft: '4px solid green' }}
                            >
                                <div className="d-flex align-items-center flex-grow-1">
                                    <RxRocket className="me-2 fs-3" style ={{marginLeft:'10px', color: 'green'}}/>
                                    <span className="d-inline-block" style ={{marginLeft:'20px'}}>
                                        <div
                                            className="wd-assignment-list-item fw-bold"
                                            // href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz.quizNumber}`}
                                        >
                                            {quiz.quizTitle}
                                        </div>
                                        <div style={{ marginLeft: '0', fontSize: '0.8em' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div style={{ color: 'red' }}>
                                                    <strong>Multiple Quizzes</strong>
                                                </div>
                                                <div style={{ marginLeft: '10px' }}>
                                                    | <strong>Not available until</strong> 
                                                    {/* {quiz.available} | */}
                                                </div>
                                            </div>
                                            <div>
                                                <strong>Due</strong> 
                                                {/* {quiz.due}  */}
                                                | {quiz.points} pts
                                            </div>
                                        </div>
                                    </span>
                                    <div style={{ marginLeft: "auto" }}>                                        
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
                                                    <a id="wd-publish-modules-only-button" className="dropdown-item" href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz.quizNumber}`}>
                                                        Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="wd-publish-modules-only-button" className="dropdown-item" onClick={() => handleDelete(quiz.quizNumber,quiz._id)}>
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
                                    </div>
                                </div>
                            </li>
                        ))}
                </li>
            </ul>
        </div>
    );
}
