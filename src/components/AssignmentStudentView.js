import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrls } from '../helpers/apiUrls'
import { getHeaders } from '../helpers/requestConfig'
import Loader from './Loader'
import { appConstants } from '../helpers/appConstants'

function AssignmentStudentView() {

    const [laoding, setLaoding] = useState(true);
    const [assignmentData, setAssignmentData] = useState();

    let assignment = JSON.parse(localStorage.getItem(appConstants.CURRENT_ASSIGNMENT_INFO));

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        axios.get(apiUrls.openStudentAssignmentView(assignment.id), {
            headers: getHeaders()
        })
        .then((res) => {
            console.log(res.data);
            setAssignmentData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLaoding(false);
        })
    }

    function AssignemntBody () {

        return (
            <div>
                <h1>Assignemnt: {assignmentData.title}</h1>
                <h4>Instructions: {assignmentData.instructions}</h4>
                <h4>Points: {assignmentData.points}</h4>
                <h4>Due Date: {assignmentData.dueDate}</h4>
                <h4>Assignemnt Files: {assignmentData.fileLinks}</h4>
            </div>
        )
    }

    return (
        <div>
            {
                laoding ? <Loader /> : <AssignemntBody />
            }
        </div>
    )
}

export default AssignmentStudentView
