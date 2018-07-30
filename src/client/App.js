import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './component/AwardCard.js';
import KudosForm from './component/KudosForm.js';
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      kudosText: "",
      kudosTitle: "",
      kudosReceiver: "",
      kudosSender: "",
      users: [],
      awards: [],
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount = () => {
    axios.all([
      axios.get("/api/users"),
      axios.post("/api/kudos", {
        id: 4,
        title: "Loudest Eater Award!",
        comment: "Who chews carrots like that at work?",
        sender: "Ashlee",
        receiver: "Leah"
      })
    ])
      .then(axios.spread((usersRes, kudosRes) => {
        this.setState({
          users: usersRes.data,
          awards: kudosRes.data
        })
      }));
  }

  postKudos = () => {
    axios.post("/api/kudos", {
      id: 5,
      title: this.state.kudosTitle,
      comment: this.state.kudosText,
      sender: this.state.kudosSender,
      receiver: this.state.kudosReceiver
    }).then(response => {
      this.setState({
        awards: response.data
      })
    });
    this.toggle()
  }

  updateKudosText = (event) => {
    this.setState({ kudosText: event.target.value });
  }

  updateKudosTitle = (event) => {
    this.setState({ kudosTitle: event.target.value });
  }

  updateKudosReceiver = (event) => {
    this.setState({ kudosReceiver: event.target.value });
  }

  updateKudosSender = (event) => {
    this.setState({ kudosSender: event.target.value });
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
                <Button color="success" onClick={this.toggle}>Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="kudosModal">
              <ModalHeader toggle={this.toggle}>Give Kudos!</ModalHeader>
              <ModalBody>
                <KudosForm
                  receiveroption={this.state.users.map((e, index) => <option key={index}>{e.name} 💯</option>)}
                  senderoption={this.state.users.map((e, index) => <option key={index}>{e.name} 💯</option>)}
                  // postKudos={this.postKudos}
                  updateKudosText={this.updateKudosText}
                  updateKudosTitle={this.updateKudosTitle}
                  updateKudosReceiver={this.updateKudosReceiver}
                  updateKudosSender={this.updateKudosSender} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.postKudos}>Submit</Button>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {this.state.awards.map((e, index) => <AwardCard key={index} id={e.id} receiver={e.receiver} sender={e.sender} title={e.title} comment={e.comment} />)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;