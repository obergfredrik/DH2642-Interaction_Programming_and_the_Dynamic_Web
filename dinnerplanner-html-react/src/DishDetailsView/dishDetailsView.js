import React, { Component } from "react";
import Header from "../components/Header/header";
import SideBarContainer from "../components/SideBar/sideBarContainer";
import RecipeContainer from "../components/Recipe/recipeContainer";
import './dishDetailsView.css';
class DishDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="grid-container-details">
          <Header />
          <SideBarContainer />
        <div className="searchResults">
          <RecipeContainer/>
        </div>
      </div>
    );
  }
}

export default DishDetailsView;
