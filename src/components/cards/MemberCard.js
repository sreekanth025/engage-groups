import axios from 'axios'
import React from 'react'
import { Button, Card, CardBody, CardGroup, CardTitle } from 'reactstrap'
import { apiUrls } from '../../helpers/apiUrls'
import { getHeaders } from '../../helpers/requestConfig'
import { useNavigate } from 'react-router';
import { appConstants } from '../../helpers/appConstants'

function MemberCard({groupMember}) {

    let navigate = useNavigate();
    let group = JSON.parse(localStorage.getItem(appConstants.CURRENT_GROUP_INFO));

    const handleClick = async () => {

        let body = {
            "groupId" : groupMember.groupId,
            "membershipId" : groupMember.id,
        }

        await axios
                .post(apiUrls.acceptMembership(), body, {
                    headers : getHeaders()
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    navigate(`/group/${group.groupId}`);
                })
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
