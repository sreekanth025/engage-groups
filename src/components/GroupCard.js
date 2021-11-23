import React from 'react'
import { CardBody, Card, CardGroup, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { appConstants } from '../helpers/appConstants';

function GroupCard({group}) {

    let navigate = useNavigate();

    function handleClick() {
        localStorage.setItem(appConstants.CURRENT_GROUP_INFO, JSON.stringify(group));
        navigate(`/group/${group.groupId}`, group)
    }

    return (
        <div>
            <CardGroup>
                <Card onClick={handleClick} style={{ cursor: "pointer" }}>
                    <CardBody>
                        <CardTitle tag="h5">
                            {group.groupName}
                        </CardTitle>
                    </CardBody>
                </Card>
                
            </CardGroup>
        </div>
    )
}

export default GroupCard;