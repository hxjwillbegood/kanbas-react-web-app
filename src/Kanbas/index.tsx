import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import Courses from "./Courses";
import "./styles.css";
import KanbasNavigation from "./Navigation";
import {useState} from "react";
import * as db from "./Database";
import store from "./store";
import {Provider} from "react-redux";
import AssignmentEditor from "./Courses/Assignments/Editor";

export default function Kanbas() {

    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "reactjs.png", description: "New Description"
    });

    const addNewCourse = () => {
        const newCourse = {...course, _id: new Date().getTime().toString()};
        setCourses([...courses, {...course, ...newCourse}]);
    };

    function deleteCourse(_id: string) {
        const newCourses = courses.filter(course => course._id !== _id);
        setCourses(newCourses);
    }

    const updateCourse = () => {
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
                            <Route path="Account" element={<h1>Account</h1>}/>
                            <Route path="Dashboard"
                                   element={<Dashboard courses={courses} course={course} setCourse={setCourse}
                                                       addNewCourse={addNewCourse} deleteCourse={deleteCourse}
                                                       updateCourse={updateCourse}/>}/>
                            <Route path="Courses/:cid/*" element={<Courses courses={courses}/>}/>
                            <Route path="Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}