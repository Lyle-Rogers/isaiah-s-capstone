import React, { Component } from 'react';
import NavBar from "./nav-bar";

export default class BoardRandom extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {

        return (
            <div>
                <NavBar handleCom={this.props.handleCom} handlePol={this.props.handlePol} handleBs={this.props.handleBs} handleRandom={this.props.handleRandom}/>

                Board 4
            </div>
        );
    }
}