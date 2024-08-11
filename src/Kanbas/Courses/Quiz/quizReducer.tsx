import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const quizQuestionsSlice = createSlice({
  name: "quizQuestions",
  initialState,
  reducers: {
    setCurrentQuestions: (state, action) => {
        state.questions = action.payload;
      },

    addQuestion: (state, { payload: question }) => {
        const newQuestion: any = {
            _id: new Date().getTime().toString(),      
            questionID: question.title,  
            questionTitle: question.course,
            questionType: question.questionType,
            questionDescription: question.available, 
            questionAnswer: question.due,
          };
      state.questions = [...state.questions, newQuestion] as any;
    },

    updateQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? question : q
      ) as any;
    },

    deleteQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (q: any) => q._id !== questionId
      );
    },
  },
});

export const { setCurrentQuestions, addQuestion, updateQuestion, deleteQuestion } = quizQuestionsSlice.actions;

export default quizQuestionsSlice.reducer;
