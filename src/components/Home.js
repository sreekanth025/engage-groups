import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { apiUrls } from '../helpers/apiUrls'
import { getHeaders } from '../helpers/requestConfig'
import { useEffect, useState } from 'react'
import GroupCard from './cards/GroupCard'
import Loader from './Loader'

function Home() {

    const [loading, setLoading] = useState(true);
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        await axios.get(apiUrls.getUserGroups(), {
            headers: getHeaders()
        })
        .then((res) => {
            console.log(res);
            setGroups(res.data);
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
            <h1>This is home page</h1>
            <Link to="/createGroup"><Button>Create New Group</Button></Link>

            {loading ? <Loader />: 
            groups.map((item, indx) => (
                <GroupCard group={item} key={indx}/>
            ))}
        </div>
    )
}

export default Home

