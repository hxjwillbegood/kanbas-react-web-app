import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentQuestions, addQuestion, updateQuestion, deleteQuestion } from "./quizReducer";

export default function QuizQuestionDetailsEditor() {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [choices, setChoices] = useState([{ text: '', correct: false }]);
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [fillInTheBlankAnswers, setFillInTheBlankAnswers] = useState(['']);
  const dispatch = useDispatch();
  const { cid, id } = useParams();

  const quizzes = useSelector((state: any) => state.quizReducer.quizzes);

  const currentQuiz = quizzes.find(
    (a: any) => a.quizNumber === id
  );

  const quizQuestions = currentQuiz.quizQuestion;

  const currentQuestion = quizQuestions.find(
    (a: any) => a.questionNumber === cid
  );

  const courseId = currentQuiz.course;

  // Initialize the state with the current question data
  useEffect(() => {
    if (currentQuestion) {
      setTitle(currentQuestion.questionTitle);
      setPoints(currentQuestion.questionPoints);
      setQuestion(currentQuestion.questionDescription);
      setQuestionType(currentQuestion.questionType);
      if (currentQuestion.questionType === 'Multiple Choice') {
        setChoices(currentQuestion.choices || [{ text: '', correct: false }]);
      } else if (currentQuestion.questionType === 'True/False') {
        setCorrectAnswer(currentQuestion.correctAnswer || null);
      } else if (currentQuestion.questionType === 'Fill in the blank') {
        setFillInTheBlankAnswers(currentQuestion.fillInTheBlankAnswers || ['']);
      }
    }
  }, [currentQuestion]);

  const handleChoiceChange = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index].text = value;
    setChoices(newChoices);
  };

  const handleCorrectChoiceChange = (index: number) => {
    const newChoices = choices.map((choice, i) => ({
      ...choice,
      correct: i === index,
    }));
    setChoices(newChoices);
  };

  const addChoice = () => {
    setChoices([...choices, { text: '', correct: false }]);
  };

  const removeChoice = (index: number) => {
    setChoices(choices.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    alert('Question saved!');
    // Add your save logic here
  };

  const handleFillInTheBlankChange = (index: number, value: string) => {
    const newAnswers = [...fillInTheBlankAnswers];
    newAnswers[index] = value;
    setFillInTheBlankAnswers(newAnswers);
  };

  const addFillInTheBlankAnswer = () => {
    setFillInTheBlankAnswers([...fillInTheBlankAnswers, '']);
  };

  const removeFillInTheBlankAnswer = (index: number) => {
    setFillInTheBlankAnswers(fillInTheBlankAnswers.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Question Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <select
          value={questionType} 
          onChange={(e) => setQuestionType(e.target.value)} 
          className="form-select w-50"
          style={{ flex: 1, padding: '10px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        >
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="True/False">True/False</option>
          <option value="Fill in the blank">Fill in the blank</option>
        </select>
        <span style={{ marginRight: '10px' }}>pts:</span>
        <input
          type="number"
          placeholder="Points"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          style={{ width: '80px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
      <hr/>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="question" style={{ display: 'block', marginBottom: '5px' }}>Question:</label>
        <textarea
          id="question"
          name="question"
          value={question} 
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', height: '100px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>

      {questionType === "Multiple Choice" && (
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>Answers:</label>
          {choices.map((choice, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="radio"
                name="correctChoice"
                checked={choice.correct}
                onChange={() => handleCorrectChoiceChange(index)}
                style={{ marginRight: '10px' }}
              />
              <textarea
                value={choice.text}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
                style={{ flex: 1, padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }}
              />
              <button
                onClick={() => removeChoice(index)}
                style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addChoice}
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', display: 'block', margin: '10px 0' }}
          >
            Add Another Option
          </button>
        </div>
      )}

      {questionType === "True/False" && (
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>Correct Answer:</label>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="radio"
              id="true"
              name="correctAnswer"
              checked={correctAnswer === true}
              onChange={() => setCorrectAnswer(true)}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor="true" style={{ marginRight: '20px' }}>True</label>
            <input
              type="radio"
              id="false"
              name="correctAnswer"
              checked={correctAnswer === false}
              onChange={() => setCorrectAnswer(false)}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor="false">False</label>
          </div>
        </div>
      )}

      {questionType === "Fill in the blank" && (
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>Correct Answers:</label>
          {fillInTheBlankAnswers.map((answer, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="text"
                value={answer}
                onChange={(e) => handleFillInTheBlankChange(index, e.target.value)}
                style={{ flex: 1, padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }}
              />
              <button
                onClick={() => removeFillInTheBlankAnswer(index)}
                style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addFillInTheBlankAnswer}
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', display: 'block', margin: '10px 0' }}
          >
            Add Another Correct Answer
          </button>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${id}/QuizQuestionEditor`} >
          <button style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}>
            Cancel
          </button>
        </Link>

        <Link to={`/Kanbas/Courses/1234/Quizzes/QuizNumber/QuizQuestionEditor`}>
          <button onClick={handleSave} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
            Save/Update Question
          </button>
        </Link>
      </div>
    </div>
  );
}
