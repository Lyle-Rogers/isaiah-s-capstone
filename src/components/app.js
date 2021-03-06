import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "./helpers/icons";
import LogIn from "./pages/login";
import Board from "./pages/board";
import ThreadDetails from "./pages/thread-details";

import Landing from "./pages/landing";
import Rules from "./pages/rules";
import NewThread from "./pages/new-thread";
import NewPoll from "./pages/new-poll";

export default class App extends Component {
  constructor(props) {
    super(props);
    Icons();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/board/:boardId/:threadId" component={ThreadDetails} />
            <Route path="/board/:boardId" component={Board} />

            <Route path="/details" component={ThreadDetails} />
            <Route path="/rules" component={Rules} />
            <Route path="/PLACEWHEREPORCELAIN" component={LogIn} />
            <Route path="/new-thread" component={NewThread} />
            <Route path="/new-poll" component={NewPoll} />
          </Switch>
        </Router>
      </div>
    );
  }
}
