import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";
import AwardCard from './component/AwardCard.js';
import KudosForm from './component/KudosForm.js';

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
          comment: "Thanks for always looking out for us.",
          sender: "Fabian",
          receiver: "Leon"
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Laura makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
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
            <AwardCard id="Badge Name" receiver="Archit" title="Heading" comment="Conversion stealth influencer business-to-business entrepreneur hypotheses investor customer deployment metrics learning curve direct mailing long tail mass market. Pitch iteration stock android business-to-consumer bandwidth seed round user experience paradigm shift channels equity pivot. Metrics partner network validation responsive web design first mover advantage backing research &amp; development market mass market innovator sales infrastructure." />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <KudosForm option={this.state.users.map(e => <option>{e.name} 💯</option>)} />
          </Col>
        </Row>
        <hr />
        {this.state.awards.map(e => <AwardCard id={e.id} receiver={e.receiver} title={e.title} comment={e.comment} />)}
      </Container>
    );
  }
}

export default App;