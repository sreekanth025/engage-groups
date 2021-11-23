import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrls } from '../helpers/apiUrls';
import { getHeaders } from '../helpers/requestConfig';
import { appConstants } from '../helpers/appConstants';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function Group() {

    const [loading, setLoading] = useState(true);
    const [assignments, setAssignments] = useState([]);

    let { groupId } = useParams();
    const group = JSON.parse(localStorage.getItem(appConstants.CURRENT_GROUP_INFO));

    function CreateAssignment() {
        if(group.adminMail === group.userEmail) {
            return <Link to="/createAssignment"><Button>Create New Assignment</Button></Link>
        }

        return <div> </div>
    }

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        await axios.get(apiUrls.getGroupAssignmnets(groupId), {
            headers: getHeaders()
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <div>
            <h1>Group</h1>
            <CreateAssignment />
        </div>
    )
}

export default Group