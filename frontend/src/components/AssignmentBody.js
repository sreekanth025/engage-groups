import React from 'react'
import AssignmentSubmissionForm from './forms/AssignmentSubmissionForm'

function AssignmentBody({assignmentData}) {
    return (
        <div>
            <h1>Assignemnt: {assignmentData.title}</h1>
            <h4>Instructions: {assignmentData.instructions}</h4>
            <h4>Points: {assignmentData.points}</h4>
            <h4>Due Date: {assignmentData.dueDate}</h4>
            <h4>Assignemnt Files: <a href={assignmentData.fileLinks[0]} target="_blank"> Click Here </a> </h4>
        </div>
    )
}

export default AssignmentBody
