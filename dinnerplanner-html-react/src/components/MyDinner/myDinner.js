import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import "./myDinner.css";

class MyDinner extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div className="mydinner-grid-container">
    <div className="leftmydinner">
      <div style={{ display: "inline" }}>My dinner:&nbsp;</div>
      <div
        id="numGuest"
        className="value-num-guests"
        style={{ display: "inline" }}
      >
        {this.props.numberOfGuests}
      </div>
      <div id="people" style={{ display: "inline" }} />
      &nbsp;people
    </div>
    <div className="rightmydinner">
      <Link to="/search">
        <Button id="mydinnerbutton">Go back and edit dinner</Button>
      </Link>
    </div>
  </div> 
  );
  }
}
 
export default MyDinner;