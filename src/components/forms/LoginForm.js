import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../../helpers/apiUrls';
import { appConstants } from '../../helpers/appConstants';

function LoginForm({setIsAuth}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [redirect, setRedirect] = useState(false);

    var staus_number = "401";

    const getToken = async(body) => {
        await axios
            .post(apiUrls.login(), body)
            .then((res) => {
                console.log('res: ')
                console.log(res);

                console.log(res.data.token)
                setToken(res.data.token);

                console.log('Setting staus to 200');
                staus_number = "200";
            })
            .catch((err) => {

                console.log('err: ')
                console.log(err);
                staus_number = "401";
            });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const body = {
            "username": email,
            "password": password
        }
        console.log(body)
        await getToken(body);
        console.log(staus_number);

        if(staus_number === "200") {
            localStorage.setItem(appConstants.AUTH_TOKEN, "Bearer "+token);
            console.log('login successful');
            setIsAuth(true);
        }
        else {
            console.log('Authentication falied')
            alert('Incorrect Password');
            setIsAuth(false);
        }
        // console.log(localStorage.getItem('authToken'));
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email-id</Label>
                    <Input
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="please provide your email id"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default LoginForm
