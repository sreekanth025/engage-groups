import React from 'react'
import { appConstants } from '../helpers/appConstants';
import SignUpForm from './forms/SignUpForm'

function Signup({setIsAuth}) {

    setIsAuth(false);
    localStorage.removeItem(appConstants.AUTH_TOKEN);

    return (
        <div>
            <h1>This is signup Page</h1>
            <SignUpForm setIsAuth={setIsAuth}/>
        </div>
    )
}

export default Signup
