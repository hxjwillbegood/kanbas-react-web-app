import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "./client";
import * as people from "../Courses/People/client";
import { current } from "@reduxjs/toolkit";
import * as coursesClient from "../Courses/client";


export default function Dashboard(
  
  { courses, course, setCourses, setCourse, 
    deleteCourse, updateCourse, }: {
    courses: any[]; 
    course: any; 
    setCourses: (courses: any[]) => void;
    setCourse: (course: any) => void;
    // addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; 
  }){
  const [error, setError] = useState("");
  const [userCourses, setUserCourses] = useState<any[]>([]);
  // const [courses, setCourses] = useState<any[]>([]);
  const [selectedCourseNumber, setSelectedCourseNumber] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  console.log("Courses Number Array:", currentUser.courses);

  
  useEffect(() => {
    if (currentUser) {
      try {
        const coursesNumber = currentUser.courses || [];
        // console.log("Courses Number Array:", coursesNumber);
        
        // alert("User set successfully!");
        fetchCourses(coursesNumber);
      } catch (err: any) {
        setError("An error occurred while fetching the user's courses.");
      }
    }
  }, [currentUser]);
  
  const fetchCourses = async (coursesNumber: string[]) => {
    try {
      const fetchedCourses = await client.fetchAllCoursesByNumber(coursesNumber);
      setUserCourses(fetchedCourses);
      // alert("Courses set successfully!");
    } catch (err) {
      setError("An error occurred while fetching courses.");
    }
  };

  const registerCourse = async () => {
    //add the course number to the uer course
      await people.updateUserCourse(currentUser._id, selectedCourseNumber); 
  }

  const addNewCourse = async () => {
    const newCourse = await coursesClient.createCourse(course);
    await people.updateUserCourse(currentUser._id, newCourse.number); 
    setCourses([ ...courses, newCourse ]);
};

  const handleCourseChange = (e:any) => {
    const courseNumber = e.target.value;
    setSelectedCourseNumber(courseNumber);
    const selectedCourse = courses.find((c) => c.number === courseNumber);
    if (selectedCourse) {
      setSelectedCourseName(selectedCourse.name);
    } else {
      setSelectedCourseName("");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({userCourses.length})</h2>
      <hr />

      {currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Course Description"
          />
        </div>
      )}

      {currentUser.role === "STUDENT" && (
        <div>
          <h5>
            Register Course
          </h5>
          <h6>Course ID:</h6>
          <select
            className="form-select w-50 mb-2"
            // value={selectedCourseNumber}
            onChange={handleCourseChange}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.number} value={course.number}>
                {course.number}
              </option>
            ))}
          </select>

          <h6>Course Name:</h6>
          <input
            value={selectedCourseName}
            className="form-control mb-2 w-50"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />

          {/* <input
            // value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            placeholder="Course Number"
          />   */}
           <br />

           <button
            className="btn btn-primary  "
            id="wd-register-new-course-click"
            onClick={registerCourse}
          >
          Register
          </button>

        </div>
        )
      }


      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {userCourses.map((course) => (
            <div key={course.number} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course.number}/Home`} className="text-decoration-none">
                <div className="card rounded-3 overflow-hidden">
                  <img src={`/images/${course.img}`} height={160} />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">Go</Link>

                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>

                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course.number);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
