import axios from 'axios';
import React from 'react'
import { appConstants } from '../helpers/appConstants'
import { useState, useEffect } from 'react'
import { apiUrls } from '../helpers/apiUrls';
import { getHeaders } from '../helpers/requestConfig';
import FeedbackForm from './forms/FeedbackForm';
import Loader from './Loader';

function SubmissionAdminView() {

    const [laoding, setLoading] = useState(true);
    const [data, setData] = useState();

    let submission = JSON.parse(localStorage.getItem(appConstants.CURRENT_SUBMISSION_INFO));

    useEffect(() => {
        getData().then(() => {
            setLoading(false)
        })
    }, [])

    async function getData() {
        await axios
            .get(apiUrls.getSubmission(submission.submissionId), {
                headers: getHeaders()
            })
            .then((res) => {
                console.log('res: ')
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
            })
    }

    return (
        <div>

            {
                laoding ? <Loader /> :
                <div>
                    <h1>Submission Admin View</h1>
                    <h4>Submitted by: {submission.name}</h4>
                    <h4>Submission time: {data.submissionTime}</h4>
                    <h4>Submission Files: <a href={data.fileLinks[0]} target="_blank"> Click Here </a> </h4>
                    <FeedbackForm />
                </div>
            }
        </div>
    )
}

export default SubmissionAdminView
