import axios from 'axios'
import React from 'react'
import { apiUrls } from '../helpers/apiUrls'
import { getHeaders } from '../helpers/requestConfig'
import { useState, useEffect } from 'react'
import Loader from './Loader'
import { appConstants } from '../helpers/appConstants'
import AssignmentBody from './AssignmentBody'
import SubmissionList from './SubmissionList'

function AssignmentAdminView() {

    const [laoding, setLoading] = useState(true);
    const [assignmentData, setAssignmentData] = useState({});
    const [submissions, setSubmissions] = useState([]);

    let assignment = JSON.parse(localStorage.getItem(appConstants.CURRENT_ASSIGNMENT_INFO));

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        await axios
                .get(apiUrls.openAdminAssignmentView(assignment.id), {
                    headers: getHeaders()
                })
                .then((res) => {
                    console.log('assignment: ');
                    console.log(res.data.assignment);

                    console.log('submissions: ');
                    console.log(res.data.submissions);

                    setAssignmentData(res.data.assignment);
                    setSubmissions(res.data.submissions);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false)
                });
    }

    return (
        <div>
            {
                laoding ? <Loader /> : 
                <div>
                    <AssignmentBody assignmentData={assignmentData}/>
                    <br /><br />
                    <h4> Assignment Submissions</h4>

                    {(submissions.length == 0) 
                    ? (<h5>No Submissions are done till now</h5>) 
                    : (<SubmissionList submissions={submissions}/>)}
                </div>
            }
        </div>
    )
}

export default AssignmentAdminView
