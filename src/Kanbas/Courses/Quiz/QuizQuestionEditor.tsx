import { HiOutlinePlus } from "react-icons/hi";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import { Console } from "console";
export default function QuizQuestionEditor(){
    const { cid, id } = useParams();
 

    const handleAddQuestion= () => {
        // alert('Quiz details saved!');
        // Add your save logic here
      };
    
    const [edit, setEdit] = useState(false);

    const handleSave = () => {
        alert('Quiz details saved!');
        // Add your save logic here
    };

    // const handleEditClick = () => {
    //     setEdit(true);
    //   };
     
    const quizzes = useSelector((state: any) => state.quizReducer.quizzes);
    

    const currentQuiz = quizzes.find(
      (a: any) => a.quizNumber === id && a.course === cid
    );

    const questions = currentQuiz.quizQuestion;
    console.log("question:",questions);

    return (
        <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' , borderRadius: '10px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/${currentQuiz?.quizNumber}/QuizDetailsEditor`}> 
                <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid  transparent'  }}>
                    Details
                </button>
            </Link>
             
            <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid #007bff ' , fontWeight: 'bold'}}>
                Questions
            </button>
            </div >

            <table border={1} width="100%"  >

                <thead>
                    <tr>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Question Name</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Question Type</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Question Points</td> 
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}></td>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question: any, index: number) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                                {question.questionTitle}
                            </td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                                {question.questionType}
                            </td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                                {question.questionPoints} pts
                            </td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${currentQuiz?.quizNumber}/${question.questionNumber}`}> 
                                    <button 
                                    className="btn btn-warning"
                                    // onClick = {handleEditClick}
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', marginTop: '30px' }}>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${id}/QuizDetailsEditor`}> 
                    <button onClick={handleAddQuestion} 
                    className= "btn btn-secondary center" 
                    style={{   marginLeft: '10px', cursor: 'pointer' }}>
                        <HiOutlinePlus style={{  marginBottom: '3px', marginRight: '5px' }} />

                        New Question
                    </button>
                </Link>
            </div>


            
            <hr/>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${id}   `}  className= "btn btn-secondary" style={{   marginLeft: '10px', cursor: 'pointer' }}>Cancel</Link>
                <button onClick={handleSave} className= "btn btn-danger" style={{   marginLeft: '10px', cursor: 'pointer' }}>Save</button>
            </div>

        </div>





    );

}