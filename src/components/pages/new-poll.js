import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NewPoll extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className='new-poll-wrapper'>
                <h2>Create New Poll</h2>
                <div className='go-back' >
                    <a onClick={this.props.backClick}>go back</a>
                </div>
                <div className='add-option' >
                    <FontAwesomeIcon icon="plus-circle" />
                </div>
                <form>
                    <input type="text" name="question" id="question" value={this.state.question} onChange={this.handleChange} placeholder="Question" />
                    <input type="text" name="option" id="option" value={this.state.option} onChange={this.handleChange} placeholder="option" />
                    <input type="text" name="option" id="option" value={this.state.option} onChange={this.handleChange} placeholder="option" />

                </form>
                <button type="sumit">Post</button>
            </div>
        );
    }
}