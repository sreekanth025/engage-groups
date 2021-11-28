import axios from 'axios';
import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { apiUrls } from '../../helpers/apiUrls';
import { appConstants } from '../../helpers/appConstants';
import { getHeaders } from '../../helpers/requestConfig';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function AssignmentSubmissionForm() {

    const [files, setFiles] = useState();

    let assignment = JSON.parse(localStorage.getItem(appConstants.CURRENT_ASSIGNMENT_INFO));
    let group = JSON.parse(localStorage.getItem(appConstants.CURRENT_GROUP_INFO));
    let navigate = useNavigate();

    // Need to save the files in a storage cloud and return the links
    const getLinks = () => {
        return ["https://bit.ly/3DWdFjo"]
    }

    const handleSubmit = async(e) => {
        
        e.preventDefault();

        let body = {
            "assignmentId": assignment.id,
            "fileLinks": getLinks(),
        }

        console.log(body);

        await axios
                .post(apiUrls.submitAssignment(), body, {
                    headers: getHeaders()
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })

        navigate(`/group/${group.groupId}`)
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="files">Upload your work</Label>
                    <Input 
                        type="file"
                        name="files"
                        id="files"
                        onChange={(e) => setFiles(e.target.value)}
                    />
                </FormGroup>
                <Button>Submit Assignment</Button>
            </Form>
        </div>
    )
}

export default AssignmentSubmissionForm
