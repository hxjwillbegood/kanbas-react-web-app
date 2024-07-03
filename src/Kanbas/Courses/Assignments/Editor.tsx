import React from "react";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, updateAssignment} from "./reducer";

export default function AssignmentEditor() {

    const {cid, aid} = useParams(); // id stands for assignment id (_id)
    console.log("Debug: assignment editor: cid: ", cid, " || aid is:", aid);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

    const isNewAssignment = aid === "new";
    const existingAssignment = isNewAssignment ? null : assignments.find((a: any) => a._id === aid);

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return `${monthNames[date.getMonth()]} ${date.getDate()} at ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}${date.getHours() >= 12 ? 'pm' : 'am'}`;
        };

        const dueDate = formData.get('due_date') as string;
        const availableFromDate = formData.get('available_from_date') as string;

        let assignmentData: any = {
            _id: isNewAssignment ? new Date().getTime().toString() : aid,
            course: cid,
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            points: formData.get('points') as string,
            due_date: dueDate,
            available_from_date: availableFromDate,
            until_date: dueDate, // Assuming until_date is the same as due_date
            due: formatDate(dueDate + 'T23:59:00'), // Set to 23:59 of the due date
            available: formatDate(availableFromDate + 'T12:00:00'), // Set to 00:00 of the available date
        };

        if (!isNewAssignment && existingAssignment) {
            // Preserve existing fields that are not in the form
            assignmentData = {
                ...existingAssignment,
                ...assignmentData
            };
        }

        if (isNewAssignment) {
            dispatch(addAssignment(assignmentData));
        } else {
            dispatch(updateAssignment(assignmentData));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id='wd-assignment-editor'>
            <form onSubmit={handleSave}>
                <div className="col mb-3 ps-2">
                    <label htmlFor="wd-name" className="row-sm-5 row-form-label">
                        Assignment Name
                    </label>
                    <div className="row-sm-5">
                        <input id="wd-name" className="form-control" name={"title"}
                               defaultValue={isNewAssignment ? "" : existingAssignment?.title}/>
                    </div>
                </div>
                <br/>
                <div id="wd-description">
                    <div className="mb-3 row ps-2">
                        <div className="row-cols-sm-5 row-form-label">
                            <textarea
                                className="form-control"
                                id="wd-description"
                                name="description"
                                rows={15}
                                defaultValue={isNewAssignment ? "" : existingAssignment?.description}
                            />
                        </div>
                    </div>
                </div>

                <br/>


                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-points" className="col-form-label">
                            Points
                        </label>
                    </div>
                    <div className="col">
                        <input
                            id="wd-points"
                            name="points"
                            className="form-control"
                            defaultValue={isNewAssignment ? "" : existingAssignment?.points}
                        />
                    </div>
                </div>


                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-group" className="col-form-label">
                            Assignment Group
                        </label>
                    </div>
                    <div className="col">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENT">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-display-grades-as" className="col-form-label">
                            Display Grade as
                        </label>
                    </div>
                    <div className="col text-end">
                        <select id="wd-display-grades-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                        </select></div>
                </div>
                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-submission-type" className="col-form-label">
                            Submission Type
                        </label>
                    </div>
                    <div
                        className="col"> {/*This seemingly extra container is vital for making sure all things are aligned.*/}
                        <div className="card">
                            <div className="card-body">
                                <select id="wd-submission-type" className="form-select ">
                                    <option value="Online">Online</option>
                                </select>

                                <label htmlFor="wd-online-dropdown" className="col-sm-7 col-form-label">
                                    Online Entry Options
                                </label>
                                <div className="col-sm-7">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="textEntry"/>
                                        <label className="form-check-label" htmlFor="textEntry">
                                            Text Entry
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="websiteUrl"
                                               checked/>
                                        <label className="form-check-label" htmlFor="websiteUrl">
                                            Website URL
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="mediaRecordings"/>
                                        <label className="form-check-label" htmlFor="mediaRecordings">
                                            Media Recordings
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="studentAnnotation"/>
                                        <label className="form-check-label" htmlFor="studentAnnotation">
                                            Student Annotation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="fileUploads"/>
                                        <label className="form-check-label" htmlFor="fileUploads">
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-assign" className="col-form-label">
                            Assign
                        </label>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="col">
                                    <div className="col">
                                        <label htmlFor="wd-due-date" className="col-form-label">
                                            Due
                                        </label>
                                    </div>
                                    <div className="col">
                                        <input
                                            id="wd-due-date"
                                            name="due_date"
                                            className="form-control"
                                            type="date"
                                            defaultValue={isNewAssignment ? "" : existingAssignment?.due_date}
                                        />
                                    </div>
                                    <br/>
                                </div>
                                <div className="col text-nowrap">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="wd-available-from" className="col-form-label">
                                                Available from
                                            </label>
                                            <input
                                                id="wd-available-from"
                                                name="available_from_date"
                                                className="form-control"
                                                type="date"
                                                defaultValue={isNewAssignment ? "" : existingAssignment?.available_from_date}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="wd-available-until" className="col-form-label">
                                                Until
                                            </label>
                                            <input
                                                id="wd-available-until"
                                                name="available_until_date"
                                                className="form-control"
                                                type="date"
                                                defaultValue={isNewAssignment ? "" : existingAssignment?.until_date}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={"row float-end"}>
                    <div className={"col"}>
                        <button type="button" id="wd-cancel" className={"btn btn-lg btn-secondary me-2"}
                                onClick={handleCancel}>Cancel
                        </button>
                        <button type="submit" id="wd-save" className={"btn btn-lg btn-danger"}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}