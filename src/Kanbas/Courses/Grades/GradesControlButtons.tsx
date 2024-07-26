import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import {FaGear} from "react-icons/fa6";


export function GradesControlButtons() {
    return (
        <div id="wd-grades-controls" className="float-end text-nowrap">

            <button id="wd-file-import"
                className="btn btn-secondary text-nowrap me-2">
                <FaFileImport className="me-2"/>
                Import
            </button>

            

            <div className="dropdown d-inline me-2">
                <button id="wd-file-export"
                        className="btn btn-secondary
                                   dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown">
                    <FaFileExport className="me-2"/>
                    Export
                </button>
            </div>

            <button className="btn btn-secondary justify-content-around">
                <FaGear className="me-1"/>
            </button>
        </div>

    );
}
