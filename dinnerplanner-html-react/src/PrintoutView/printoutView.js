import React, { Component } from "react"
import Header from "../components/Header/header"
import MyDinner from "../components/MyDinner/myDinnerContainer"
import DishPrintout from "../components/DishPrintout/dishPrintoutContainer"

class Printout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="printout">
        <Header/>
        <MyDinner/>
        <DishPrintout/>
      </div>
    );
  }
}

export default Printout;
