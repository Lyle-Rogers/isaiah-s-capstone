import React, { Component } from 'react';

export default class Rules extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        return (
            <div className='rules-wrapper' >
                <div className='go-back' >
                    <a onClick={this.props.backClick}>go back</a>
                </div>
                <div className='rules-list' >
                    <h2>Rules</h2>
                    <ul>
                        <li>No pooping your pants...</li>
                        <li>No pooping your pants...</li>
                        <li>No pooping your pants...</li>
                        <li>No pooping your pants...</li>
                        <li>No pooping your pants...</li>
                        <li>No pooping your pants...</li>
                        <li>No pooping your pants...</li>
                    </ul>
                </div>

            </div>
                
            
        );
    }
}