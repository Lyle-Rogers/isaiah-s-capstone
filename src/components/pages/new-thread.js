import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NewThread extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Link to="/board/boardId">
              <div className=" mt-3 h2 mb-0 text-dark">
                <FontAwesomeIcon icon="times" />
              </div>
            </Link>
            <div className="justify-center mt-5">
              <h1>New Thread</h1>
            </div>

            <Form>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Anonymous" />
                <Form.Text className="text-muted">Optional</Form.Text>
              </Form.Group>

              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Thread Title" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Thread Subject" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Write your content here..."
                  className="resize-none"
                />
              </Form.Group>

              <Button variant="outline-dark" block>
                Post
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
