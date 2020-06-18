import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import { Alert, NavBar, Button, Row } from "react-bootstrap";


export default class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        errorText: "",
        redirect: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
        errorText: ""
    });
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            redirect: true,
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/boards" />
        }
        return (
                <div className="landing-wrapper " >
                        <h2 className="heading">LeBaron Anonymous</h2>
                    <Alert variant="warning" className="warning">
                        <h1 >Disclaimer</h1>
                        <p>
                            By continue to this  
                            website <br/> you are confirming that you <br/>
                            have read and agree to the <br/> </p> <Alert.Link className="alert-link">Terms &amp; Conditions</Alert.Link> 
                        
                    </Alert>

                    <Button variant="outline-dark" className="btn" size="lg">Continue</Button>

            </div>
        );
    }
}
