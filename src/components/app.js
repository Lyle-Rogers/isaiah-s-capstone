import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "./helpers/icons";
import LandingNav from "./pages/landing-nav";
import LogIn from "./pages/login";

import Boards from "./pages/boards";
import Landing from "./pages/landing";
import Rules from "./pages/rules";
import NavBar from "./pages/nav-bar";
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
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/boards" component={Boards} />
            <Route path="/rules" component={Rules} />
            <Route path="/new-poll" component={NewPoll} />
            <Route path="/new-thread" component={NewThread} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </Router>


      </div>
    );
  }
}
