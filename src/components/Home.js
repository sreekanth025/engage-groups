import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function Home() {
    return (
        <div>
            <h1>This is home page</h1>
            <Link to="/createGroup"><Button>Create New Group</Button></Link>
        </div>
    )
}

export default Home

