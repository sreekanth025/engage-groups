import React from 'react'
import { CardBody, Card, CardGroup, CardTitle } from 'reactstrap'
import { appConstants } from '../../helpers/appConstants'
import { useNavigate } from 'react-router';

function SubmissionCard({submission}) {

    let navigate = useNavigate();

    const handleClick = () => {
        localStorage.setItem(
            appConstants.CURRENT_SUBMISSION_INFO,
            JSON.stringify(submission)
        );
        navigate('/adminOpenSubmission')
    }

    return (
        <div>
            <Card onClick={handleClick} style={{ cursor: "pointer" }}>
                <CardBody>
                    <CardTitle tag="h6">
                        {submission.name}
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default SubmissionCard
