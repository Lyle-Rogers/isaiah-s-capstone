import React, { Component } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import Sample from "../../../static/images/sample.jpg";
import MyNavBar from "./nav-bar";
import NewPoll from "./new-poll";
import NewThread from "./new-thread";
import Rules from "./rules";
import { Link } from "react-router-dom";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: this.props.match.params.boardId,
        name: "community",
        des: "we are farmers",
      },

      threads: [
        {
          username: "paul",
          id: 123,
          title: "title",
          subject: "poop",
          content: "i pooped my pants",
        },
        {
          username: "fucker",
          id: 123,
          title: "nigger",
          subject: "ablack guy",
          content: "i dun seen a nigger when i was walkin",
        },
        {
          username: "Alexander",
          id: 123,
          title: "im a bitch",
          subject: "me",
          content:
            "im a bitchim a bitchim a bitchim a bitchim a bitchim a bitchim a bitchim a bitchim a bitchim a bitch",
        },
        {
          username: "poop",
          id: 123,
          title: "marytin is gay",
          subject: "gay",
          content: "ithat guy with a similar name as mine is gay",
        },
        {
          username: "paul",
          id: 123,
          title: "title",
          subject: "poop",
          content: "i pooped my pants",
        },
        {
          username: "paul",
          id: 123,
          title: "title",
          subject: "poop",
          content: "i pooped my pants",
        },
        {
          username: "paul",
          id: 123,
          title: "title",
          subject: "poop",
          content: "i pooped my pants",
        },
        {
          username: "paul",
          id: 123,
          title: "title",
          subject: "poop",
          content: "i pooped my pants",
        },
      ],
    };

    this.threadMaker3000 = this.threadMaker3000.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
      const oldData = { ...this.state.data };

      oldData.id = this.props.match.params.boardId;

      this.setState({
        data: oldData,
      });
    }

    // new axios call here
  }

  threadMaker3000(item) {
    return (
      <div
        style={{ width: "18rem" }}
        className="ml-auto mr-auto mt-5 border border-dark  text-center"
        key={item.id}
      >
        <Card.Body>
          <Card.Title className="mb-0">{item.title}</Card.Title>
          <small className="mt-0 mb-5">by {item.username}</small>
          <Card.Text className="mt-4">{item.content}</Card.Text>
          <Link to="/board/:boardId/:threadId">
            <Button variant="primary">View Posts</Button>
          </Link>
        </Card.Body>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="position-fixed w-100 mt--50 z-index">
          <MyNavBar />
        </div>
        <div>
          <div
            style={{ width: "18rem" }}
            className="ml-auto mr-auto mt-5 border border-dark"
          >
            <Card.Img variant="top" src={Sample} />
            <Card.Body>
              <Card.Title>{this.state.data.id}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. dont break the rules plz
              </Card.Text>
            </Card.Body>
          </div>

          <div
            style={{ width: "18rem" }}
            className="ml-auto mr-auto mt-5 border border-dark"
          >
            <Card.Body>
              <Card.Title className="left">Create New</Card.Title>

              <ButtonGroup aria-label="Create New " className="ml-50px mr-0">
                <Link to="/new-thread">
                  <Button variant="dark">Thread</Button>
                </Link>

                <Link to="/new-poll">
                  <Button variant="outline-dark">Poll</Button>
                </Link>
              </ButtonGroup>
              <Card.Text>plz be curtious of others and shit</Card.Text>
            </Card.Body>
          </div>
        </div>
        {this.state.threads.map(this.threadMaker3000)}
      </div>
    );
  }
}
