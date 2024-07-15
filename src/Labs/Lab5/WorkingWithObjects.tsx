import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", 
        completed: false, 
        score: 0,
    });

    const [module, setModule] = useState({
        id: 1, 
        name: "NodeJS Module",
        description: "Create a NodeJS server with ExpressJS",
        course: "Web Development", 
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
        <h3>Working With Objects</h3>
        <h4>Modifying Assignment Properties</h4>
        <a id="wd-update-assignment-title"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
            Update Title
        </a>
        <input className="form-control w-75" id="wd-assignment-title"
            value={assignment.title} 
            onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}/>
        <hr />

        <h4>Retrieving Assignment Object</h4>
        <a id="wd-retrieve-assignments" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment`}>
            Get Assignment
        </a><hr/>

        <h4>Retrieving Assignment Name </h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment/title`}>
            Get Title
        </a><hr/>

        <h4>Update Assignment Score </h4>
        <a id="wd-update-assignment-score"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Assignment Score
        </a>
        <input className="form-control w-75" id="wd-assignment-score"
            // value={assignment.score.toString()} 
            onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value, 10) })}/>
        <hr />

        <h4>Update Completion of Assignment </h4>
        <div className="form-check">
            <input className="form-check-input" 
            type="radio"
            name="gridRadios" 
            value="option1"  
            onChange={(e) =>
            setAssignment({ ...assignment, completed: true })}/>
            <label className="form-check-label" htmlFor="r3">Complete </label> 
        </div>
        
        <div className="form-check">
            <input className="form-check-input" 
            type="radio"
            name="gridRadios"
            value="option2"             
            onChange={(e) =>
            setAssignment({ ...assignment, completed: false })}/>
            <label className="form-check-label" htmlFor="r3">Incomplete </label> 
        </div>

        <a id="wd-update-assignment-completion"
            className="btn btn-primary"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Update Assignment Completion
        </a>
        <hr/>

        <h4>Retrieving Module Object</h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module`}>
            Get Module
        </a><hr/>
        
        <h4>Retrieving Module Name </h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/name`}>
            Get Name
        </a><hr/>

        <h4>Modifying Module Name</h4>
        <a id="wd-update-module-title"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/name/${module.name}`}>
            Update Module Name
        </a>
        <input className="form-control w-75" id="wd-module-title"
            value={module.name} onChange={(e) =>
            setModule({ ...module, name: e.target.value })}/>
        <hr />

        <h4>Modifying Module Description</h4>
        <a id="wd-update-module-description"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/description/${module.description}`}>
            Update Module Description
        </a>
        <input className="form-control w-75" id="wd-module-description"
            value={module.description} onChange={(e) =>
            setModule({ ...module, description: e.target.value })}/>
        <hr />

        </div>
    
    );}
