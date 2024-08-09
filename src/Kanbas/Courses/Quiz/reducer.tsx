import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        title: quiz.title,
        course: quiz.course,
        available: quiz.available,
        due: quiz.due,
        points: quiz.points,
        due_date: quiz.due_date,
        available_from_date: quiz.available_from_date,
        until_date: quiz.until_date,
        description: quiz.description,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== quizId
      );
    },

    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
  },
});

export const {setQuizzes, addQuiz, deleteQuiz, updateQuiz } =
quizzesSlice.actions;
export default quizzesSlice.reducer;
