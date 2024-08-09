import { HiOutlinePlus } from "react-icons/hi";
import { useParams, Link } from "react-router-dom";
export default function QuizQuestionEditor(){
    const handleAddQuestion= () => {
        alert('Quiz details saved!');
        // Add your save logic here
      };

    // const handleCancel = () => {
    // // Navigate to the Quiz List screen
    // };

    const handleSave = () => {
        alert('Quiz details saved!');
        // Add your save logic here
    };

    return (
        <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' , borderRadius: '10px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
            <a href="#/Kanbas/Courses/1234/Quizzes/QuizNumber/QuizDetailsEditor"> 
                <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid  transparent'  }}>
                    Details
                </button>
            </a>
             
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
                    <tr>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Q1</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Multiple Choices</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>100 pts</td>
                        <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}> 
                            <a href="#/Kanbas/Courses/1234/Quizzes/QuizNumber/QuizQuestionEditor/QuizQuestionDetailsEditor"> 
                                <button
                                id="wd-edit-course-click"
                                className="btn  btn-warning"
                                >
                                Edit
                            </button>
                            </a>
                        </td>
                    </tr>

                </tbody>

            </table>

            {/* 这里加quiz map */}
              
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', marginTop: '30px' }}>
                <Link to={`/Kanbas/Courses/1234/Quizzes/QuizNumber/QuizQuestionEditor/QuizQuestionDetailsEditor`}>
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
                <Link to={`/Kanbas/Courses/1234/Quizzes  `}  className= "btn btn-secondary" style={{   marginLeft: '10px', cursor: 'pointer' }}>Cancel</Link>
                <button onClick={handleSave} className= "btn btn-danger" style={{   marginLeft: '10px', cursor: 'pointer' }}>Save</button>
            </div>

        </div>

    );

}