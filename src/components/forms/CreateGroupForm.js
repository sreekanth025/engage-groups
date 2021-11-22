import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useState } from 'react'
import axios from 'axios';
import { apiUrls } from '../../helpers/apiUrls';
import { getHeaders } from '../../helpers/requestConfig';
import { useNavigate } from 'react-router-dom';


function CreateGroupForm() {

    const [groupName, setGroupName] = useState('');
    const [emails, setEmails] = useState('');
    
    var created = false;
    let navigate = useNavigate();

    const getResponse = async (body) => {

        await axios
                .post(apiUrls.createGroup(), body, {
                    headers: getHeaders()
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });

        created=true;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        function applyTrim(item, indx, arr) {
            arr[indx] = item.trim();
        }

        var emailList = emails.split(",");
        emailList.forEach(applyTrim);

        const body = {
            "groupName": groupName,
            "emails": emailList
        }

        console.log(body);
        await getResponse(body);
        
        if(created) navigate('/home');
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="groupName">Group Name</Label>
                    <Input 
                        type="text"
                        name="groupName"
                        id="groupName"
                        placeholder="Enter Group Name"
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="emails">Members email</Label>
                    <Input 
                        type="text"
                        name="emails"
                        id="emails"
                        placeholder="enter member emails (separated by comma) to send invitation"
                        onChange={(e) => {setEmails(e.target.value);}}
                    />
                </FormGroup>
                <Button>Create</Button>
            </Form>
        </div>
    )
}

export default CreateGroupForm
