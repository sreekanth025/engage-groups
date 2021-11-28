import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useState } from 'react';
import AssignmentAdminView from '../AssignmentAdminView';
import { appConstants } from '../../helpers/appConstants';
import axios from 'axios';
import { apiUrls } from '../../helpers/apiUrls';
import { getHeaders } from '../../helpers/requestConfig';
import { useNavigate } from 'react-router';

function FeedbackForm() {

    const [points, setPoints] = useState();
    const [feedback, setFeedback] = useState('');

    let submission = JSON.parse(localStorage.getItem(appConstants.CURRENT_SUBMISSION_INFO));
    let navigate = useNavigate();

    const handleSubmit = async(e) => {

        e.preventDefault();

        let body = {
            "submissionId": submission.submissionId,
            "points": points,
            "feedback": feedback,
        }

        console.log(body);
        await axios
                .post(apiUrls.submitFeedback(), body, {
                    headers: getHeaders()
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })

        navigate("/adminOpenAssignment")
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="points">Points for work done</Label>
                    <Input 
                        type="number"
                        name="points"
                        id="points"
                        onChange={(e) => setPoints(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="feedback">Feedback</Label>
                    <Input 
                        type="textarea"
                        name="feedback"
                        id="feedback"
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </FormGroup>
                <Button>Submit Points and Feedback</Button>
            </Form>
        </div>
    )
}

export default FeedbackForm
