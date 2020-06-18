import React, { Component } from 'react';
import NavBar from "./nav-bar";

export default class BoardCom extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        return (
            <div className="board-wrapper">
                <NavBar handleCom={this.props.handleCom} handlePol={this.props.handlePol} handleBs={this.props.handleBs} handleRandom={this.props.handleRandom}/>
                <div className='this-board' >
                    <div className='board-title' >
                        <h2>Community Board</h2>
                    </div>
                    <div className='board-description' >
                        <p >
                            in this board blah blah blahblah blah blah blahblah blah
                            board blah blah blahblah blah blah blahblah blahboard bl
                            board blah blah blahblah blah blah blahblah blahboard blboard blah blah blahblah blah blah blahblah blahboard blboard blah blah blahblah blah blah blahblah blahboard bl
                        </p>
                    </div>
                    <div className='rules' >
                        <a>Rules</a>
                    </div>
                </div>
            </div>
        );
    }
}