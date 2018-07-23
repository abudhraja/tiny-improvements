import React from "react";
import { Card, CardBody } from "reactstrap";

const AwardCard = props => (
    <Card>
        <CardBody>
            <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
            <p>{props.id}</p>
            <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
            <h6>{props.receiver}</h6>
            <h2>{props.title}</h2>
            <p>{props.comment}</p>
        </CardBody>
    </Card>
)

export default AwardCard;