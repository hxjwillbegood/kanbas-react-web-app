import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import { updateQuiz } from "./reducer";

export default function QuizDetailsEditor() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quizType, setQuizType] = useState('graded-quiz');
  const [assignmentGroup, setAssignmentGroup] = useState('quizzes');
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [timeLimit, setTimeLimit] = useState(false);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(20);
  const [multipleTimes, setMultipleTimes] = useState(false);
  const [multipleAttempts, setMultipleAttempts] = useState(1);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(true);
  const [webcamRequired, setWebcamRequired] = useState(false);
  const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');

  const { cid, id } = useParams();
  const dispatch = useDispatch();

  const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

  const currentQuiz = quizzes.find(
    (a: any) => a.quizNumber === id && a.course === cid
  );

  // Initialize the state with current quiz values
  // Without this, the form will start with empty values even if you're editing an existing quiz.
  React.useEffect(() => {
    if (currentQuiz) {
      setTitle(currentQuiz.quizTitle || '');
      setDescription(currentQuiz.description || '');
      setQuizType(currentQuiz.quizType || 'graded-quiz');
      setAssignmentGroup(currentQuiz.assignmentGroup || 'quizzes');
      setShuffleAnswers(currentQuiz.shuffle === 'true');
      setTimeLimit(currentQuiz.timeLimit === 'true');
      setTimeLimitMinutes(parseInt(currentQuiz.timeLimitMinutes, 10) || 20);
      setMultipleTimes(currentQuiz.multipleAttempts === 'true');
      setMultipleAttempts(parseInt(currentQuiz.multipleAttempts, 10) || 1);
      setShowCorrectAnswers(currentQuiz.showCorrectAnswer === 'true');
      setAccessCode(currentQuiz.accessCode || '');
      setOneQuestionAtATime(currentQuiz.oneQuestionAtATime === 'true');
      setWebcamRequired(currentQuiz.webRequired === 'true');
      setLockQuestionsAfterAnswering(currentQuiz.lockQuestion === 'true');
      setDueDate(currentQuiz.due_date || '');
      setAvailableFrom(currentQuiz.available_from_date || '');
      setAvailableUntil(currentQuiz.until_date || '');
    }
  }, [currentQuiz]);

  const handleSave = async () => {
    const updatedQuiz = {
      ...currentQuiz,
      quizTitle: title,
      description: description,
      quizType: quizType,
      assignmentGroup: assignmentGroup,
      shuffle: shuffleAnswers.toString(),
      timeLimit: timeLimit.toString(),
      timeLimitMinutes: timeLimitMinutes.toString(),
      multipleAttempts: multipleTimes.toString(),
      showCorrectAnswer: showCorrectAnswers.toString(),
      accessCode: accessCode,
      oneQuestionAtATime: oneQuestionAtATime.toString(),
      webRequired: webcamRequired.toString(),
      lockQuestion: lockQuestionsAfterAnswering.toString(),
      due_date: dueDate,
      available_from_date: availableFrom,
      until_date: availableUntil,
    };

    try {
      const status = await client.updateQuiz(updatedQuiz);
      if (status) {
        dispatch(updateQuiz(updatedQuiz));
      }
    } catch (error) {
      alert('Failed to save quiz details.');
      console.error('Error updating quiz:', error);
    }
  };

  const handleSaveAndPublish = () => {
    handleSave();
    alert('Quiz saved and published!');
    // Add your save and publish logic here
  };

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid #007bff', fontWeight: 'bold' }}>
          Details
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${currentQuiz?.quizNumber}/QuizQuestionEditor`}> 
            <button style={{ flex: 1, padding: '10px', cursor: 'pointer', background: 'none', border: 'none', borderBottom: '2px solid transparent' }}>
            Questions
            </button>
        </Link>
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
            <option value="Graded Quiz">Graded Quiz</option>
            <option value="Practice Quiz">Practice Quiz</option>
            <option value="Graded Survey">Graded Survey</option>
            <option value="Ungraded Survey">Ungraded Survey</option>
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
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            <option value="Assignments">Assignments</option>
            <option value="Project">Project</option>
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
              id="multiple-times"
              name="multiple-times"
              checked={multipleTimes}
              onChange={(e) => setMultipleTimes(e.target.checked)}
            />
            <label htmlFor="multiple-times" style={{ marginLeft: '10px' }}>Multiple Attempts</label>
            <input
              type="number"
              id="multiple-times"
              name="multiple-times"
              value={multipleAttempts}
              onChange={(e) => setMultipleAttempts(parseInt(e.target.value, 10))}
              style={{ width: '60px', marginLeft: '10px' }}
              disabled={!multipleTimes}
            /> Attempts
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
        <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-secondary" style={{ marginLeft: '10px', cursor: 'pointer' }}>Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${id}`} onClick={handleSave} className="btn btn-danger" style={{ marginLeft: '10px', cursor: 'pointer' }}>Save</Link>
        <button onClick={handleSaveAndPublish} className="btn btn-success" style={{ marginLeft: '10px', cursor: 'pointer' }}>Save and Publish</button>
      </div>
    </div>
  );
}
