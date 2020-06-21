import React, { Component } from "react";
import "./presentTotal.css";

class PresentTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.totalPrice === "0.00")
      return <div className="presenttotal" style={{ display: "none" }}></div>;
    else {
      return (
        <div className="presenttotal">
          Total: &nbsp;
          <div className="totalnumber">{this.props.totalPrice}</div>
          <div style={{ color: "red" }}>&nbsp;SEK</div>
        </div>
      );
    }
  }
}

export default PresentTotal;
