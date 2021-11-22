import React from 'react'
import { CardBody, Card, CardGroup, CardTitle } from 'reactstrap';

function GroupCard({group}) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{group.groupName}</CardTitle>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default GroupCard;