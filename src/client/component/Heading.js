import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Heading = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">KudosForce
                <img src="http://www.stickpng.com/assets/images/58482f67cef1014c0b5e4a81.png" hspace="20" height="90px" width="128px" alt="Salesforce Logo" />
                </h1>
                <hr className="my-2" />
                <p className="lead">Welcome to KudosForce, Archit! At Salesforce, we are all about recognizing the great work our Ohana does - use it to say "Mahalo" to anyone!</p>
                <br />
                <p className="lead">Below, you'll see all the latest Kudos being given across the Ohana. You can give Kudos to others, filter the Kudos being displayed that contain/don't contain certain keywords, or just filter down to the Kudos you've received!</p>
                <br />
                <div>
                    <Button color="info" size="lg" onClick={props.giveKudosToggle} active>Give Kudos</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="info" size="lg" onClick={props.filterKudosToggle} active>Filter Kudos</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="info" size="lg" onClick={props.myKudosToggle} active>My Kudos</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="info" size="lg" onClick={props.negativeKudosToggle} active>Negative Keywords</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="info" size="lg" onClick={props.resetKudos} active>Reset</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </Jumbotron>
        </div>
    );
};

export default Heading;