import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NewPoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [1, 1],
    };

    this.handleChange = this.handleChange.bind(this);
    this.optionMaker3000 = this.optionMaker3000.bind(this);
    this.addOption = this.addOption.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addOption(e) {
    e.preventDefault();

    this.setState({
      options: this.state.options.concat(1),
    });
  }

  optionMaker3000() {
    return (
      <input
        type="text"
        name="option"
        onChange={this.handleChange}
        placeholder="Option"
        className="w-100  border border-secondary"
      />
    );
  }

  render() {
    return (
      <Container fluid className="mt-3 m-auto">
        <Link to="/board/boardId">
          <div className=" h2 text-dark">
            <FontAwesomeIcon icon="times" />
          </div>
        </Link>
        <Row>
          <Col>
            <div className="justify-center">
              <h1>New Poll</h1>
            </div>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Anonymous" />
                <Form.Text className="text-muted">Optional</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Question</Form.Label>
                <Form.Control type="text" placeholder="Whats your question?" />
              </Form.Group>

              <FontAwesomeIcon
                className="h5"
                icon="plus-circle"
                onClick={this.addOption}
              />
              <div>{this.state.options.map(this.optionMaker3000)}</div>
              <Button variant="outline-dark" block>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
