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
            board: "Community"
        }

        this.handleCom = this.handleCom.bind(this);
        this.handlePol = this.handlePol.bind(this);
        this.handleBs = this.handleBs.bind(this);
        this.handleRandom = this.handleRandom.bind(this);

    }

    handleCom() {
        this.setState({
            board: "Community" 
        })
    }

    handlePol() {
        this.setState({
            board: "Politics" 
        })
    }

    handleBs() {
        this.setState({
            board: "Bull Shit" 
        })
    }
    handleRandom() {
        this.setState({
            board: "Random" 
        })
    }



    render() {
        

        if (this.state.board === "Community") {
            return <BoardCom handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        } else if (this.state.board === "Politics") {
            return <BoardPol handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        }else if (this.state.board === "Bull Shit") {
            return <BoardBs handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        }else if (this.state.board === "Random") {
            return <BoardRandom handleCom={this.handleCom} handlePol={this.handlePol} handleBs={this.handleBs} handleRandom={this.handleRandom}/>
        } 
    }
}
