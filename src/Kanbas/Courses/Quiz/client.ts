import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
// const QUESTIONS_API = `${REMOTE_SERVER}/api/quizzes/questions`;

//fetch quizzes
export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
};

//create quizzes
export const createQuiz = async (courseId: string, quiz: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz );
    return response.data;
};

// Delete a quiz by its ID
export const deleteQuiz = async (courseId: string, quizNumber: string) => {
    const response = await axios.delete(`${QUIZZES_API}/${courseId}/${quizNumber}`);
    return response.data;
};

//update quizzes
export const updateQuiz = async (quiz: any) => {
    try {
        const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
        console.log("Update Quiz Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating quiz:", error);
        throw error;
    }
};

//fetch questions
export const findQustionsForQuiz = async (quizId: string) => {
    const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
    return response.data;
};


//update questions
export const updateQuestion = async (quiz: any) => {
    try {
        const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
        console.log("Update Quiz Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating quiz:", error);
        throw error;
    }
};