import React from 'react'
import { useNavigate } from 'react-router';
import { CardBody, Card, CardGroup, CardTitle } from 'reactstrap';
import { appConstants } from '../../helpers/appConstants';



function AssignmentCard({assignment}) {

    let navigate = useNavigate();
    const group = JSON.parse(localStorage.getItem(appConstants.CURRENT_GROUP_INFO));

    function handleClick() {
        localStorage.setItem(appConstants.CURRENT_ASSIGNMENT_INFO, JSON.stringify(assignment));
        
        if(group.adminMail === group.userEmail){
            navigate('/adminOpenAssignment')
            // navigate('/studentOpenAssignment')
        } else {
            navigate('/studentOpenAssignment')
        }
    }
    console.log('assignment card');
    return (
        <div>
            <CardGroup>
                <Card onClick={handleClick} style={{ cursor: "pointer" }}>
                    <CardBody>
                        <CardTitle tag="h5">
                            {assignment.title}
                        </CardTitle>
                    </CardBody>
                </Card>
                
            </CardGroup>
        </div>
    )
}

export default AssignmentCard
