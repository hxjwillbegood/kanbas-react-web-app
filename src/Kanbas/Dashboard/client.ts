import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses/by-numbers`; // Updated endpoint

// Fetch courses by an array of course numbers
export const fetchAllCoursesByNumber = async (coursesNumber: string[]) => {
  try {
    const { data } = await axios.post(COURSES_API, { numbers: coursesNumber });
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const findExistingCourse = async (courseNumber: string) => {
  const response = await axios.get(`/api/courses/${courseNumber}`);
  return response.data;
};

export const updateUserCourse = async (courseNubmer: string[]) => {
  const response = await axios.put(`/api/courses/user`);

}