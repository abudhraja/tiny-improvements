import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const KudosForm = props => (

    <Form>
        <FormGroup>
            <Label for="giveKudos">Give Kudos to</Label>
            <Input type="select" name="select" id="giveKudos" onChange={props.updateKudosReceiver} value={props.kudosReceiver}>
                {props.receiveroption}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="sendKudos">From</Label>
            <Input type="select" name="select" id="sendKudos" onChange={props.updateKudosSender} value={props.kudosSender}>
                {props.senderoption}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" onChange={props.updateKudosTitle} value={props.kudosTitle} />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Kudos Text" onChange={props.updateKudosText} value={props.kudosText} />
        </FormGroup>
        <FormGroup>
            <Button onClick={props.postKudos} color="success">Submit</Button>
        </FormGroup>
    </Form>

)

export default KudosForm;