import React from 'react'
import SubmissionCard from './cards/SubmissionCard'

function SubmissionList({submissions}) {
    return (
        <div>
            {
                submissions.map((item, indx) => (
                    <SubmissionCard submission={item} key={indx}/>
                ))
            }
        </div>
    )
}

export default SubmissionList
