import React, { Component } from "react";
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import AwardCard from './component/AwardCard.js';
import KudosForm from './component/KudosForm.js';
import Heading from './component/Heading.js';
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
      filterUser: "",
      negativeKeywords: "",
      postKudosModal: false,
      filterKudosModal: false,
      negativeKudosModal: false
    }
    this.giveKudosToggle = this.giveKudosToggle.bind(this);
    this.filterKudosToggle = this.filterKudosToggle.bind(this);
    this.negativeKudosToggle = this.negativeKudosToggle.bind(this);
  }

  giveKudosToggle = () => {
    this.setState({
      postKudosModal: !this.state.postKudosModal
    });
  }

  filterKudosToggle = () => {
    this.setState({
      filterKudosModal: !this.state.filterKudosModal
    })
  }

  negativeKudosToggle = () => {
    this.setState({
      negativeKudosModal: !this.state.negativeKudosModal
    })
  }

  componentDidMount = () => {
    axios.all([
      axios.get("/api/users"),
      axios.get("/api/kudos")
    ])
      .then(axios.spread((usersRes, kudosRes) => {
        this.setState({
          users: usersRes.data,
          kudosReceiver: usersRes.data[0].name,
          kudosSender: usersRes.data[0].name,
          awards: kudosRes.data
        })
      }));
  }

  postKudos = () => {

    axios.post("/api/kudos", {
      Name: this.state.kudosTitle,
      Comment__c: this.state.kudosText,
      Receiver__c: this.findReceiverId(),
      Sender__c: this.findSenderId()
    })

    this.giveKudosToggle()

  }

  getFilter = () => {
    axios.get("/api/filter/" + this.state.filterUser)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    this.filterKudosToggle()
  }

  getNegativeFilter = () => {
    axios.get("/api/negativekudos/" + this.state.negativeKeywords)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    this.negativeKudosToggle()
  }

  getMyKudos = () => {
    axios.get("/api/mykudos").then(response => {
      this.setState({
        awards: response.data
      })
    })
  }

  resetKudos = () => {
    axios.get("/api/kudos").then(response => {
      this.setState({
        awards: response.data
      })
    })
  }

  updateFilter = (event) => {
    this.setState({ filterUser: event.target.value });
  };

  updateNegativeFilter = (event) => {
    this.setState({ negativeKeywords: event.target.value });
  }

  findReceiverId = () => {
    const receiver = this.state.users.find(user => user.name === this.state.kudosReceiver);
    return receiver.id;
  }

  findSenderId = () => {
    const sender = this.state.users.find(user => user.name === this.state.kudosSender);
    return sender.id;
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
            <Heading
              giveKudosToggle={this.giveKudosToggle}
              filterKudosToggle={this.filterKudosToggle}
              myKudosToggle={this.getMyKudos}
              negativeKudosToggle={this.negativeKudosToggle}
              resetKudos={this.resetKudos} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="6">
            <Modal isOpen={this.state.postKudosModal} toggle={this.giveKudosToggle} className="giveKudosModal">
              <ModalHeader toggle={this.giveKudosToggle}>Give Kudos!</ModalHeader>
              <ModalBody>
                <KudosForm
                  receiveroption={this.state.users.map((e, index) => <option key={index}>{e.name}</option>)}
                  senderoption={this.state.users.map((e, index) => <option key={index}>{e.name}</option>)}
                  updateKudosText={this.updateKudosText}
                  updateKudosTitle={this.updateKudosTitle}
                  updateKudosReceiver={this.updateKudosReceiver}
                  updateKudosSender={this.updateKudosSender} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.postKudos}>Submit</Button>
                <Button color="secondary" onClick={this.giveKudosToggle}>Close</Button>
              </ModalFooter>
            </Modal>
          </Col>
          <Col md="12" lg="6">
            <Modal isOpen={this.state.filterKudosModal} toggle={this.filterKudosToggle} className="filterKudosModal">
              <ModalHeader toggle={this.filterKudosToggle}>Filter Kudos by Keyword</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label>Filter Kudos</Label>
                    <Input type="text" onChange={this.updateFilter} />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.getFilter}>Filter</Button>
                <Button color="secondary" onClick={this.filterKudosToggle}>Close</Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.negativeKudosModal} toggle={this.negativeKudosToggle} className="negativeKudosModal">
              <ModalHeader toggle={this.negativeKudosToggle}>Filter Kudos by Negative Keyword</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label>Filter Kudos</Label>
                    <Input type="text" onChange={this.updateNegativeFilter} />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.getNegativeFilter}>Filter</Button>
                <Button color="secondary" onClick={this.negativeKudosToggle}>Close</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
        <Row>
          {this.state.awards.map((e, index) =>
            <Col md="4" lg="4">
              <AwardCard
                key={index} id={e.id}
                receiver={e.receiver__r.Name}
                sender={e.sender__r.Name}
                title={e.name}
                comment={e.comment__c} /> </Col>)}
        </Row>
      </Container>
    );
  }
}

export default App;