import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/header";
import Button from "../components/Button/button";
import "./homeView.css";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Create new dinner"
    };
  }

  render() {
    return (
      <div className="homeview-grid-container">
        <Header />
        <div className="centertext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
          laoreet orci. Nullam ut iaculis diam. Aliquam magna nulla, congue ut
          elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh
          elementum euismod a sit amet arcu. Maecenas a efficitur leo.
        </div>
        <div className="spacing-medium"></div> 
        <Link to="/search">   
          <Button id="homebutton" link="/search">{this.state.button}</Button>    
          </Link>  
      </div>
    );
  }
}

export default HomeView;
