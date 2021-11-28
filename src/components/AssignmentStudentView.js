import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrls } from '../helpers/apiUrls'
import { getHeaders } from '../helpers/requestConfig'
import Loader from './Loader'
import { appConstants } from '../helpers/appConstants'
import AssignmentSubmissionForm from './forms/AssignmentSubmissionForm'
import AssignmentBody from './AssignmentBody'


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

    return (
        <div>
            {
                laoding ? <Loader /> : 
                <div>
                    <AssignmentBody assignmentData={assignmentData} />
                    <AssignmentSubmissionForm />
                </div>
            }
        </div>
    )
}

export default AssignmentStudentView
