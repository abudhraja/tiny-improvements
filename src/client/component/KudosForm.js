import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const KudosForm = props => (

    <Form>
        <FormGroup>
            <Label for="giveKudos">Give Kudos to</Label>
            <Input type="select" name="select" id="giveKudos">
                {props.option}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" />
        </FormGroup>
        <FormGroup>
            <Input type="textarea" placeholder="Kudos Text" />
        </FormGroup>
    </Form>

)

export default KudosForm;