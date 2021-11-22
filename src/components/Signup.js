import React from 'react'
import SignUpForm from './forms/SignUpForm'

function Signup({setIsAuth}) {
    return (
        <div>
            <h1>This is signup Page</h1>
            <SignUpForm setIsAuth={setIsAuth}/>
        </div>
    )
}

export default Signup
