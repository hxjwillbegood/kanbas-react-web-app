import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";

export default function QuizDetailsEditor(){


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quizType, setQuizType] = useState('graded-quiz');
  const [assignmentGroup, setAssignmentGroup] = useState('quizzes');
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [timeLimit, setTimeLimit] = useState(false);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(20);
  const [multipleAttempts, setMultipleAttempts] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(true);
  const [webcamRequired, setWebcamRequired] = useState(false);
  const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');

  const handleSave = () => {
    alert('Quiz details saved!');
    // Add your save logic here
  };

  const handleSaveAndPublish = () => {
    alert('Quiz saved and published!');
    // Add your save and publish logic here
  };

  const handleCancel = () => {
    // Navigate to the Quiz List screen
  };

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid #007bff', fontWeight: 'bold' }}>
          Details
        </button>
        <a href="#/Kanbas/Courses/1234/Quizzes/QuizNumber/QuizQuestionEditor"> 
            <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid transparent' }}>
            Questions
            </button>
        </a>
      </div>

      <div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title">Quiz Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description">Quiz Instructions</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', height: '100px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="quiz-type">Quiz Type</label>
          <select
            id="quiz-type"
            name="quiz-type"
            value={quizType}
            onChange={(e) => setQuizType(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="graded-quiz">Graded Quiz</option>
            <option value="practice-quiz">Practice Quiz</option>
            <option value="graded-survey">Graded Survey</option>
            <option value="ungraded-survey">Ungraded Survey</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="assignment-group">Assignment Group</label>
          <select
            id="assignment-group"
            name="assignment-group"
            value={assignmentGroup}
            onChange={(e) => setAssignmentGroup(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="quizzes">Quizzes</option>
            <option value="exams">Exams</option>
            <option value="assignments">Assignments</option>
            <option value="project">Project</option>
          </select>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="shuffle-answers"
              name="shuffle-answers"
              checked={shuffleAnswers}
              onChange={(e) => setShuffleAnswers(e.target.checked)}
            />
            <label htmlFor="shuffle-answers" style={{ marginLeft: '10px' }}>Shuffle Answers</label>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="time-limit"
              name="time-limit"
              checked={timeLimit}
              onChange={(e) => setTimeLimit(e.target.checked)}
            />
            <label htmlFor="time-limit" style={{ marginLeft: '10px' }}>Time Limit</label>
            <input
              type="number"
              id="time-limit-minutes"
              name="time-limit-minutes"
              value={timeLimitMinutes}
              onChange={(e) => setTimeLimitMinutes(parseInt(e.target.value, 10))}
              style={{ width: '60px', marginLeft: '10px' }}
              disabled={!timeLimit}
            /> Minutes
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="multiple-attempts"
              name="multiple-attempts"
              checked={multipleAttempts}
              onChange={(e) => setMultipleAttempts(e.target.checked)}
            />
            <label htmlFor="multiple-attempts" style={{ marginLeft: '10px' }}>Allow Multiple Attempts</label>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="show-correct-answers"
              name="show-correct-answers"
              checked={showCorrectAnswers}
              onChange={(e) => setShowCorrectAnswers(e.target.checked)}
            />
            <label htmlFor="show-correct-answers" style={{ marginLeft: '10px' }}>Show Correct Answers</label>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="one-question-at-a-time"
              name="one-question-at-a-time"
              checked={oneQuestionAtATime}
              onChange={(e) => setOneQuestionAtATime(e.target.checked)}
            />
            <label htmlFor="one-question-at-a-time" style={{ marginLeft: '10px' }}>One Question at a Time</label>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="webcam-required"
              name="webcam-required"
              checked={webcamRequired}
              onChange={(e) => setWebcamRequired(e.target.checked)}
            />
            <label htmlFor="webcam-required" style={{ marginLeft: '10px' }}>Webcam Required</label>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <input
              type="checkbox"
              id="lock-questions"
              name="lock-questions"
              checked={lockQuestionsAfterAnswering}
              onChange={(e) => setLockQuestionsAfterAnswering(e.target.checked)}
            />
            <label htmlFor="lock-questions" style={{ marginLeft: '10px' }}>Lock Questions After Answering</label>
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="access-code">Access Code</label>
          <input
            type="text"
            id="access-code"
            name="access-code"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="due-date">Due Date</label>
          <input
            type="datetime-local"
            id="due-date"
            name="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="available-from">Available From</label>
          <input
            type="datetime-local"
            id="available-from"
            name="available-from"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="available-until">Available Until</label>
          <input
            type="datetime-local"
            id="available-until"
            name="available-until"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Link to={`/Kanbas/Courses/1234/Quizzes  `} className= "btn btn-secondary" style={{   marginLeft: '10px', cursor: 'pointer' }}>Cancel</Link>
        <Link to={`/Kanbas/Courses/1234/Quizzes/QuizNumber `}onClick={handleSave} className= "btn btn-danger" style={{   marginLeft: '10px', cursor: 'pointer' }}>Save</Link>
        <button onClick={handleSaveAndPublish} className= "btn btn-success" style={{   marginLeft: '10px', cursor: 'pointer' }}>Save and Publish</button>
      </div>
    </div>
  );

}
