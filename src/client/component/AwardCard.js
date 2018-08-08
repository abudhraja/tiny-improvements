import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const AwardCard = props => (
    <Card>
        <CardBody>
            <CardImg top width="100%" src="https://c1.sfdcstatic.com/content/dam/blogs/us/thumbnails/meet-the-trailhead-characters-astro-codey-and-friends/trailhead_characters.png" alt="Card image cap" />
            <CardTitle>{props.title}</CardTitle>
            <CardTitle>{props.comment}</CardTitle>
            <CardText>To: {props.receiver}</CardText>
            <CardText>From: {props.sender}</CardText>
        </CardBody>
    </Card>
)

export default AwardCard;