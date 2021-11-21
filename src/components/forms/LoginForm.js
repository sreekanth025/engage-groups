import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const body = {
            "username": email,
            "password": password
        }
        console.log(body)
        console.log('Form submitted');
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit}>
            <FormGroup>
                    <Label for="exampleEmail">Emai-id</Label>
                    <Input
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="please provide your email id"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
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
