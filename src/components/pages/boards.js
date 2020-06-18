import React, { Component } from 'react';
import NavBar from "./nav-bar";
import NewPoll from './new-poll';
import NewThread from './new-thread';
import Rules from './rules';
import BoardBoard from './board-board';

export default class Boards extends Component {
    constructor(props) {
        super(props);
    
        this.state={
            new: "",
            posts: [],
        }

        this.newPollClick = this.newPollClick.bind(this);
        this.newThreadClick = this.newThreadClick.bind(this);
        this.backClick = this.backClick.bind(this);
        this.rulesClick = this.rulesClick.bind(this);

    }


    newPollClick() {
        this.setState ({
            new:"poll"
        })
    }

    newThreadClick () {
        this.setState ({
            new:"thread"
        })
    }

    rulesClick() {
        this.setState ({
            new: "rules"
        })
    }

    backClick() {
        this.setState ({
            new: ""
        })
    }



    render() {
        if (this.state.new === "poll") {
            return <NewPoll backClick={this.backClick} />
        } else if (this.state.new === "thread") {
            return <NewThread backClick={this.backClick}/>
        } else if (this.state.new === "rules") {
            return <Rules backClick={this.backClick} />
        }
        else {

            return (
                <div  >
                <BoardBoard />
                </div>
            )
        
        }
    }
}