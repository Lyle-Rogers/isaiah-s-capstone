import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Redirect } from "react-router-dom";
import { Alert, NavBar, Button, Row, Modal, Container } from "react-bootstrap";


export default class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            redirect: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalShow = this.handleModalShow.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.goToRules = this.goToRules.bind(this)

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

    handleModalShow() {
        this.setState({modalOpen: true})
    }

    handleModalClose() {
        this.setState({modalOpen:false})
    }

    goToRules() {
        this.setState({rules: true})
    }



    render() {


        if (this.state.redirect) {
            return <Redirect to="/board" />
        }else if (this.state.modalOpen) {
            return (
                <Container>
                    <Modal show={this.handleModalShow} onHide={this.handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Terms &amp; Conditions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            these are legal bullshit gay is from satan dont do drugs legal bullshit legal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahlegal bullshit blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah
                            </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" className="agree" onClick={this.handleModalClose}  size="lg"block>
                                I agree
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <h2> Poop your pants</h2>
                </Container>
            )
        } else if (this.state.rules) {
            return <Redirect to="/rules" />
        }
        return (
                <div className="landing-wrapper " >
                        <h2 className="ml-auto mr-auto mt-4 mb-5">LeBaron Anonymous</h2>
                    <Alert variant="warning" className="m-auto warning">
                        <h1 >Disclaimer</h1>
                        <p >
                            By continue to this  
                            website <br/> you are confirming that you <br/>
                            have read and agree to both<br/>the Terms &amp; Conditions and <br/>the Rules...<br/> </p> <Alert.Link onClick={this.handleModalShow} className="alert-link">Terms &amp; Conditions</Alert.Link> 
                            <br/>  <Alert.Link className="left" onClick={this.goToRules}>Rules</Alert.Link>
                    </Alert>
                    <div className="d-flex flex-column m-auto ">
                        <NavLink to="/board/com">
                        <Button variant="outline-dark" className="w-100 p-3 mt-5" size="m">Community</Button>
                        </NavLink>
                        <NavLink to="/board/pol">
                        <Button variant="outline-dark" className="w-100 p-3 mt-4" size="m">Politics</Button>
                        </NavLink>
                        <NavLink to="/board/bs">
                        <Button variant="outline-dark" className="w-100 p-3 mt-4" size="m">Bull Shit</Button>
                        </NavLink>
                        <NavLink to="/board/r">
                        <Button variant="outline-dark" className="w-100 p-3 mt-4" size="m">Random</Button>
                        </NavLink>
                    </div>


        
        </div>

        
        );
    }
}
