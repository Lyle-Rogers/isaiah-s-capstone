import React, { Component } from 'react';

export default class NewThread extends Component {
    constructor(props) {
        super(props);

        this.state={}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="new-poll-wrapper">
                <h2>Create New Thread</h2>
                <div className='go-back' >
                    <a onClick={this.props.backClick}>go back</a>
                </div>

                <form>
                    <input type="text" name="name" id="name" placeholder="Thread Name" />
                    <input type="text" name="subject" id="subject" placeholder="Subject" />
                    <textarea name="content" id="content" placeholder="Write your content here" />
                    <h4>Reacaptcha or whatever</h4>
                    <button>Post</button>

                </form>
            </div>
        );
    }
}