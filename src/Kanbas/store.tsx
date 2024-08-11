import {configureStore} from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import quizReducer from "./Courses/Quiz/reducer";
import quizQuestionReducer from "./Courses/Quiz/quizReducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        accountReducer,
        quizReducer,
        quizQuestionReducer,
    },
});
export default store;