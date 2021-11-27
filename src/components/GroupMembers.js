import React from 'react'
import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { apiUrls } from '../helpers/apiUrls';
import { appConstants } from '../helpers/appConstants';
import { getHeaders } from '../helpers/requestConfig';
import Loader from './Loader';


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
            {loading ? <Loader /> : <h3>MEMBERS UI</h3>}
        </div>
    );
}

export default GroupMembers
