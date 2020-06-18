import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from 'react-bootstrap';


export default class NavBar extends Component {
    constructor(props) {
        super(props);


        this.state= {
            board:"Community"
        }

        this.handleHeaderCom = this.handleHeaderCom.bind(this);
        this.handleHeaderPol = this.handleHeaderPol.bind(this);
        this.handleHeaderBs = this.handleHeaderBs.bind(this);
        this.handleHeaderRandom = this.handleHeaderRandom.bind(this);

    
    }

    handleHeaderCom() {
        this.setState({board:"Community"});
        this.props.handleCom;
    }

    handleHeaderPol() {
        this.props.handlePol;

        this.setState({board:"Polotics"});

    }

    handleHeaderBs() {
        this.setState({board:"Bull Shit"})
    }

    handleHeaderRandom() {
        this.setState({board:"Random"})
    }

    render() {
        return (
            <Navbar bg="dark"  expand="sm">

        <Navbar.Brand>{`${this.state.board}`}</Navbar.Brand>
                    
                    <div className='nav-links' >
                        <div className='nav-link' >
                        <a onClick={this.handleHeaderCom}>
                            Com
                        </a>
                        </div>

                        <div className='nav-link' >
                        <a onClick={ this.handleHeaderPol}>
                            Pol
                        </a>
                        </div>

                        <div className='nav-link' >
                        <a onClick={this.props.handleBs, this.handleHeaderBs}>
                            BS
                        </a>
                        </div>

                        <div className='nav-link' >
                        <a onClick={this.props.handleRandom, this.handleHeaderRandom}>
                            Random
                        </a>
                        </div>
                    </div>

            </Navbar>

        );
    }
}