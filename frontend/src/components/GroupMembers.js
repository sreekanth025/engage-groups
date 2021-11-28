import React from 'react'
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { apiUrls } from '../helpers/apiUrls';
import { appConstants } from '../helpers/appConstants';
import { getHeaders } from '../helpers/requestConfig';
import Loader from './Loader';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import MemberCard from './cards/MemberCard';


function GroupMembers() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const group = JSON.parse(localStorage.getItem(appConstants.CURRENT_GROUP_INFO));

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        await axios.get(apiUrls.getGroupMembers(group.groupId), {
            headers: getHeaders()
        })
        .then((res) => {
            console.log(res);
            setData(res.data)
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
            <h2>Group Members</h2>
            <Link to={`/group/${group.groupId}`}><Button>Back to Group Page</Button></Link>
            {loading ? <Loader /> : 
                data.map((item, indx) => (
                    <MemberCard groupMember={item} key={indx}/>
                ))
            }
        </div>
    );
}

export default GroupMembers
