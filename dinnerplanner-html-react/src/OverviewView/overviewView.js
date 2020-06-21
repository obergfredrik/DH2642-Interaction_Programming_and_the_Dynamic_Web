import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/header";
import Button from "../components/Button/button";
import MyDinnerContainer from "../components/MyDinner/myDinnerContainer";
import DishPresenterContainer from "../components/DishPresenter/dishPresenterContainer";
import PresentTotalContainer from "../components/PresentTotal/presentTotalContainer";
import "./overviewView.css";

class OverviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Print full recipe"
    };
  }
  render() {
    return (
      <div className="overview">
        <div className="overviewheader">
          <Header />
        </div>
        <div className="overviewmydinner">
          <MyDinnerContainer />
        </div>
        <div className="overviewmain">
          <DishPresenterContainer/>
          <PresentTotalContainer/>
        </div>
        <div className="overviewprint">
          <div className="overviewbutton">
            <Link to="/printout">
              <Button id="toPrintBtn">{this.state.button}</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewView;
