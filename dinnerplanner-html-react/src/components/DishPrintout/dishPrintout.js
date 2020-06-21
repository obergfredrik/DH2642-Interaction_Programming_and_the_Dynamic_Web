import React, { Component } from "react";
import "./dishPrintout.css";

class DishPrintout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.dishes.length === 0)
      return <div className="nodish">No Dish Chosen!</div>;
    else {
      return (
      <div className="dishPrintoutContainer">
        {this.props.dishes.map((dish, i)=> (
        <div className="printdiv" key={i}>
          <img className="printpicdiv" src={dish.image}  alt={dish.dishTitle}/>
          <div className="descdiv">
            <h3>{dish.title}</h3>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="prepdiv">
            <h5>Preparation</h5>
            <div>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div> 
      ))}
      </div>
      )
    }
  }
}

export default DishPrintout;
