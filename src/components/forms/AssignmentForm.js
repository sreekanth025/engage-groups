import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react';
import { appConstants } from '../../helpers/appConstants';
import axios from 'axios';
import { apiUrls } from '../../helpers/apiUrls';
import { getHeaders } from '../../helpers/requestConfig';
import { useNavigate } from 'react-router';


function AssignmentForm() {

    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [dueDate, setDueDate] = useState();
    const [points, setPoints] = useState();
    const [files, setFiles] = useState();
    let navigate = useNavigate();

    const group = JSON.parse(localStorage.getItem(appConstants.CURRENT_GROUP_INFO));

    const getFileLinks = (files) => {

        return ["file1@drive.com", "file2@drive.com"];
    }

    const getResponse = async (body) => {
        await axios
                .post(apiUrls.createAssignment(), body, {
                    headers: getHeaders()
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        let body = {
            "groupId": group.groupId,
            "title": title,
            "instructions": instructions,
            "dueDate": dueDate,
            "points": points,
            "fileLinks": getFileLinks(files),
        }

        console.log(body);
        await getResponse(body);
        navigate(`/group/${group.groupId}`);
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input 
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title of the assignment"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="instructions"> Instructions</Label>
                    <textarea 
                        name="instructions"
                        id="instructions"
                        placeholder="Assignment Instructions"
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="dueDate">Due Date</Label>
                    <Input 
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="points">Points</Label>
                    <Input 
                        type="number"
                        name="points"
                        id="points"
                        onChange={(e) => setPoints(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="files">Assignemnt files</Label>
                    <Input 
                        type="file"
                        name="files"
                        id="files"
                        onChange={(e) => setFiles(e.target.value)}
                    />
                </FormGroup>
                <Button>Post Assignemnt</Button>
            </Form>
        </div>
    )
}

export default AssignmentForm
