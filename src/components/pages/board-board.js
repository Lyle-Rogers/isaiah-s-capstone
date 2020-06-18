import React, { Component } from 'react';
import NavBar from './nav-bar';
import BoardCom from './board-com';
import BoardPol from './board-Pol';
import BoardBs from './board-bs';
import BoardRandom from './board-r';





export default class BoardBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            board: "1"
        }

        this.handleCom = this.handleCom.bind(this);
        this.handlePol = this.handlePol.bind(this);
        this.handleBs = this.handleBs.bind(this);
        this.handleRandom = this.handleRandom.bind(this);

    }

    handleCom() {
        this.setState({
            board: "1" 
        })
    }

    handlePol() {
        this.setState({
            board: "2" 
        })
    }

    handleBs() {
        this.setState({
            board: "3" 
        })
    }
    handleRandom() {
        this.setState({
            board: "4" 
        })
    }



    render() {

        if (this.state.board === "1") {
            return <BoardCom handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        } else if (this.state.board === "2") {
            return <BoardPol handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        }else if (this.state.board === "3") {
            return <BoardBs handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        }else if (this.state.board === "4") {
            return <BoardRandom handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        } 
    }
}
