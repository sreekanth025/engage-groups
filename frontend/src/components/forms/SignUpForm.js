import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useState } from 'react'
import axios from 'axios';
import { apiUrls } from '../../helpers/apiUrls';
import { appConstants } from '../../helpers/appConstants';

function SignUpForm({setIsAuth}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    var registered_status = false;
    var token = null;

    const getResponse = async(body) => {
        await axios
            .post(apiUrls.signup(), body)
            .then((res) => {                   
                console.log(res)
                registered_status = true;
            })
            .catch((err) => {
                console.log('error occurred during registration')
                console.log(err);
            });
    }

    const getToken = async(login_details) => {

        await axios
                .post(apiUrls.login(), login_details)
                .then((res) => {
                    token = res.data.token;
                    console.log(token);
                    localStorage.setItem(appConstants.AUTH_TOKEN, "Bearer "+token);
                    setIsAuth(true);
                })
                .catch((err) => {
                    console.log('error occurred during login')
                    console.log(err);
                })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const body = {
            "userEmail" : email,
            "name" : name,
            "password" : password
        }

        console.log(body);
        await getResponse(body);

        if(registered_status) {
            const login_details = {
                "username": email,
                "password": password
            }
            await getToken(login_details);
        }
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email-id</Label>
                    <Input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>

                <Button>Register</Button>
            </Form>
        </div>
    )
}

export default SignUpForm
