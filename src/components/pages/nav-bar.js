import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        return (
            <div className='nav-wrapper' >

                <div className="nav-bar">
                    
                    <div className='nav-links' >
                        <div className='nav-link' >
                        <a onClick={this.props.handleCom}>
                            Com
                        </a>
                        </div>

                        <div className='nav-link' >
                        <a onClick={this.props.handlePol}>
                            Pol
                        </a>
                        </div>

                        <div className='nav-link' >
                        <a onClick={this.props.handleBs}>
                            BS
                        </a>
                        </div>

                        <div className='nav-link' >
                        <a onClick={this.props.handleRandom}>
                            Random
                        </a>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}