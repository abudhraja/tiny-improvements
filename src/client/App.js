import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from './component/AwardCard.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          userId: 45089,
          name: "Owen",
          position: "Captian of the Breakroom"
        },
        {
          userId: 223,
          name: "Brooke",
          position: "Winner of All Dance-Offs"
        },
        {
          userId: 6582,
          name: "Gobi",
          position: "King of Mid-Day Naps"
        }
      ],
      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us."
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does."
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee."
        }

      ]
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            <AwardCard id="Badge Name" title="Heading" comment="Conversion stealth influencer business-to-business entrepreneur hypotheses investor customer deployment metrics learning curve direct mailing long tail mass market. Pitch iteration stock android business-to-consumer bandwidth seed round user experience paradigm shift channels equity pivot. Metrics partner network validation responsive web design first mover advantage backing research &amp; development market mass market innovator sales infrastructure." />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Form>
              <FormGroup>
                <Label for="giveKudos">Give Kudos to</Label>
                <Input type="select" name="select" id="giveKudos">
                  {this.state.users.map(e => <option>{e.name} 💯</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" placeholder="Kudos Text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <hr />
        {this.state.awards.map(e => <AwardCard id={e.id} title={e.title} comment={e.comment} />)}
      </Container>
    );
  }
}

export default App;