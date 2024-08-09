import React from 'react';
import { useSelector } from 'react-redux';

const QuizDetails = () => {
  const currentUser = useSelector((state:any) => state.accountReducer.currentUser);

  return (
    <div style={{ width: '60%', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Q1 - HTML</h1>
      <hr/>
      {currentUser.role === 'FACULTY' ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button className='btn'
              style={{
                backgroundColor: '#5a6268',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                marginLeft: '10px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Preview
            </button>
            <a href="#/Kanbas/Courses/1234/Quizzes/QuizNumber/QuizDetailsEditor"> 
              <button className='btn'
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Edit
              </button>
            </a>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Quiz Type</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Graded Quiz</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Points</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>29</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Assignment Group</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>QUIZZES</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Shuffle Answers</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>No</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Time Limit</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>30 Minutes</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Multiple Attempts</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>No</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>View Responses</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Always</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Show Correct Answers</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Immediately</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>One Question at a Time</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Yes</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Require Respondus LockDown Browser</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>No</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Required to View Quiz Results</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>No</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Webcam Required</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>No</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Lock Questions After Answering</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>No</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Due</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>For</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Available from</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Until</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Sep 21 at 1pm</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Everyone</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Sep 21 at 11:40am</td>
                  <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Sep 21 at 1pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
           
          <button
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizDetails;
