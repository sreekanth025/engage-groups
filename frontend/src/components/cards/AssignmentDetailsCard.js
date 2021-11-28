import React from 'react'
import { CardText, CardGroup, Card, CardBody, CardTitle} from 'reactstrap'

function AssignmentDetailsCard({assignment}) {

    function row({key, value}) {
        return (
            <>
                <h4>{key}: </h4>
                <p> {value} </p>
                <br />
            </> )
    }

    return (
        <div>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            {assignment.title}
                        </CardTitle>
                        <CardText>
                            <row key="title" value={assignment.title}/>
                        </CardText>
                    </CardBody>
                </Card>
                
            </CardGroup>
        </div>
    )
}

export default AssignmentDetailsCard
