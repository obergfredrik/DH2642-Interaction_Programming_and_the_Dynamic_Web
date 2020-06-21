import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <button className="button" id={this.props.id} onClick={this.props.onClick}>
          {this.props.children}
        </button>
    );
  }
}

export default Button;
