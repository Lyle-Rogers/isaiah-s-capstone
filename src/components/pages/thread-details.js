import React, { Component } from "react";
import { Button, ButtonGroup, Card, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ThreadDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      posts: [
        {
          username: "billy boy",
          content: "idk this post seems kinda gay bro...",
        },
        {
          username: "billy boy",
          content: "idk this post seems kinda gay bro...",
        },
        {
          username: "billy boy",
          content: "idk this post seems kinda gay bro...",
        },
        {
          username: "billy boy",
          content: "idk this post seems kinda gay bro...",
        },
        {
          username: "billy boy",
          content: "idk this post seems kinda gay bro...",
        },
      ],
    };

    this.postMaker3000 = this.postMaker3000.bind(this);
    this.handleNewPostClick = this.handleNewPostClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
  //       const oldData = { ...this.state.data };

  //       oldData.id = this.props.match.params.boardId;

  //       this.setState({
  //         data: oldData,
  //       });
  //     }

  //     // new axios call here
  //   }

  postMaker3000(item) {
    return (
      <div
        style={{ width: "18rem" }}
        className="ml-auto mr-auto mt-5 border border-dark  text-center"
        key={item.id}
      >
        <Card.Body>
          <Card.Title className="mb-0">{item.username}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
      </div>
    );
  }

  handleModalClose() {
    this.setState({
      modal: false,
    });
  }

  handleNewPostClick() {
    this.setState({
      modal: true,
    });
  }

  render() {
    if (this.state.modal) {
      return (
        <Modal.Dialog>
          <Modal.Header closeButton onClick={this.handleModalClose}>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Anonymous" />
                <Form.Text className="text-muted">Optional</Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter your content here...</Form.Label>
                <Form.Control as="textarea" rows="5" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-dark" className="w-100">
              Post
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      );
    }
    return (
      <div>
        <div className="border m-auto">
          <div
            className="go-back text-white bg-dark d-flex position-fixed w-100 mt-0 mb-5"
            onClick={this.handleNewPostClick}
          >
            <FontAwesomeIcon icon="plus-circle" className="h1 m-4" />
            <h2 className="ml-4 mt-auto mb-auto">New Post </h2>
            <Link to="/board/boardId">
              <div>
                <FontAwesomeIcon
                  icon="times"
                  className="ml-100px mt-2 h2 text-white"
                />
              </div>
            </Link>
          </div>
          <div>
            <div
              style={{ width: "18rem" }}
              className="ml-auto mr-auto mt-5 border border-dark"
            >
              <Card.Body className="mt-5">
                <Card.Title>This Thread</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. dont break the rules plz
                </Card.Text>
              </Card.Body>
            </div>
          </div>

          {this.state.posts.map(this.postMaker3000)}
        </div>
      </div>
    );
  }
}
