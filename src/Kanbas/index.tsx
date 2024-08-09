import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import Courses from "./Courses";
import "./styles.css";
import KanbasNavigation from "./Navigation";
import {useState, useEffect} from "react";
// import * as db from "./Database";
import store from "./store";
import {Provider} from "react-redux";
import AssignmentEditor from "./Courses/Assignments/Editor";
import * as client from "./Courses/client";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
// import * as people from "./Courses/People/client";
// import { useSelector } from "react-redux";

export default function Kanbas() {
    // const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const [courses, setCourses] = useState<any[]>([]);
    const fetchCourses = async () => {
      const courses = await client.fetchAllCourses();
      setCourses(courses);
    };

    // const addNewCourse = async () => {
    //     const newCourse = await client.createCourse(course);
    //     setCourses([ ...courses, newCourse ]);
    // };

    const deleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);

        setCourses(courses.filter(
          (c) => c._id !== courseId));
    };

    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        );
    };

    useEffect(() => {
      fetchCourses();
    }, []);
  
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "reactjs.png", description: "New Description"
    });

    return (
        <Provider store={store}>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black wd-width-110px h-100">
                        <KanbasNavigation/>
                    </div>
                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="/Account/*" element={<Account />}/>
                            <Route path="Dashboard"
                                   element={<ProtectedRoute><Dashboard courses={courses} course={course} setCourses={setCourses} setCourse={setCourse}
                                                         deleteCourse={deleteCourse}
                                                       updateCourse={updateCourse} />  </ProtectedRoute>}/>
                            <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />
                            <Route path="Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}