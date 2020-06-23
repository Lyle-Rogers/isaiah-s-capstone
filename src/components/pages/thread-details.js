import React, { Component } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ThreadDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
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
    // this.newPostModal = this.newPostModal.bind(this);
    // this.handleShow = this.handleShow.bind(this);
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
      blogModalIsOpen: false,
    });
  }

  handleNewPostClick() {
    this.setState({
      blogModalIsOpen: true,
    });
  }

  render() {
    return (
      <div>
        <div className="border m-auto">
          <div className="go-back text-white bg-dark d-flex position-fixed w-100 mt-0 mb-5">
            <FontAwesomeIcon icon="plus-circle" className="h1 m-4" />
            <h2 className="ml-4 mt-auto mb-auto">New Thread </h2>
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
