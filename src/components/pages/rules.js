import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Rules extends Component {
  constructor(props) {
    super(props);

    this.state = {
      back: false,
    };

    this.backClick = this.backClick.bind(this);
  }

  backClick() {
    this.setState({ back: true });
  }
  render() {
    if (this.state.back) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="border m-auto border-dark m-auto">
          <div
            className="go-back text-white bg-dark d-flex position-fixed w-100"
            onClick={this.backClick}
          >
            <FontAwesomeIcon icon="chevron-circle-left" className="h1 m-4" />
            <h2 className="ml-4 mt-auto mb-auto"> Go Back</h2>
          </div>
          <ul className="margin-top">
            <li className="mt-5">
              No pooping your pants... No pooping your pants...No pooping your
              pants...No pooping your pants...No pooping your pants...
            </li>
            <li className="mt-5">
              No pooping your pants... No pooping your pants...
            </li>
            <li className="mt-5">
              No pooping your pants...No pooping your pants...No pooping your
              pants...No pooping your pants...
            </li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">
              No pooping your pants...No pooping your pants...No pooping your
              pants...
            </li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">
              No pooping your pants...No pooping your pants...No pooping your
              pants...No pooping your pants...No pooping your pants...No pooping
              your pants...
            </li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>{" "}
            <li>No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>{" "}
            <li>No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
            <li className="mt-5">No pooping your pants...</li>
          </ul>
        </div>
      </div>
    );
  }
}
