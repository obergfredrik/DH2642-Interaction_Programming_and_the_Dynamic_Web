import React, { Component } from "react";
import Header from "../components/Header/header";
import SideBarContainer from "../components/SideBar/sideBarContainer";
import SearchResultsContainer from "../components/SearchResults/searchResultsContainer";
import DishSearchContainer from "../components/DishSearch/dishSearchContainer";
import "./searchView.css";

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="searchview-grid-container">
          <Header />
          <SideBarContainer />
          <DishSearchContainer />
          <SearchResultsContainer />       
      </div>
    );
  }
}

export default SearchView;
