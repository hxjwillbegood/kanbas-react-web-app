import React from 'react';
import {IoEllipsisVertical} from "react-icons/io5";
import {FaCheckCircle, FaCircle, FaTrash} from "react-icons/fa";

interface HomeworkControlButtonsProps {
    onDeleteClick: () => void;
}

export default function HomeworkControlButtons({onDeleteClick}: HomeworkControlButtonsProps) {
    return (
        <div className="float-end">
            <FaTrash
                className="text-danger me-3 fs-5"
                style={{cursor: 'pointer'}}
                onClick={onDeleteClick}
            />
        </div>
    );
}