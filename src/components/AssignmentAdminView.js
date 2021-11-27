import axios from 'axios'
import React from 'react'
import { apiUrls } from '../helpers/apiUrls'
import { getHeaders } from '../helpers/requestConfig'
import { useState, useEffect } from 'react'
import Loader from './Loader'
import { appConstants } from '../helpers/appConstants'

function AssignmentAdminView() {

    const [laoding, setLaoding] = useState(true);
    const [resposne, setResposne] = useState();

    let assignment = JSON.parse(localStorage.getItem(appConstants.CURRENT_ASSIGNMENT_INFO));

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        await axios
                .get(apiUrls.openAdminAssignmentView(assignment.id), {
                    headers: getHeaders()
                })
                .then((res) => {
                    console.log(res);
                    setResposne(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLaoding(false);
                });
    }

    return (
        <div>
            <h1>Assignemnt Admin View</h1>
            {
                laoding ? <Loader /> : <h4>Data fetched, UI Under development</h4>
            }
        </div>
    )
}

export default AssignmentAdminView
