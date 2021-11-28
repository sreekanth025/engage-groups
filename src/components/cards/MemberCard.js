import React from 'react'
import { Button, Card, CardBody, CardGroup, CardTitle } from 'reactstrap'

function MemberCard({groupMember}) {

    const handleClick = async () => {

    }

    return (
        <div>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{groupMember.name}</CardTitle>
                        {
                            groupMember.role === "waiting" ? 
                            (<Button tag="h6" onClick={handleClick}>Accept Membership</Button>)
                            : <> </>
                        }
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default MemberCard
