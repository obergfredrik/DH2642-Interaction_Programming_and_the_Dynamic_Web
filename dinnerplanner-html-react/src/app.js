import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomeView from "./HomeView/homeView";
import SearchView from "./SearchView/searchView";
import DishDetailsView from "./DishDetailsView/dishDetailsView";
import OverviewView from "./OverviewView/overviewView";
import PrintoutView from "./PrintoutView/printoutView";
import { setNoGuestsAction, setDishAction, fetchDishSucceedAction, fetchSearchDishesSucceedAction, fetchDishAction, setSidebarCollapsedAction } from './data/Actions'

class App extends Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem('DinnerPlanner'))
       this.restoreStateFromDisk();
    this.props.store.subscribe(() => {this.saveStateToDisk(this.props.store.getState())});
    this.state = {};
  }

  componentDidMount() {
    document.body.classList.add("no-scroll");  
  }

  saveStateToDisk(reduxState) {
    localStorage.setItem("DinnerPlanner", JSON.stringify(reduxState));
  }

  restoreStateFromDisk (){
    let storedState = JSON.parse(localStorage.getItem('DinnerPlanner'));
    this.props.store.dispatch(setNoGuestsAction(storedState.numberOfGuests));
    this.props.store.dispatch(setDishAction(storedState.dishes));
    storedState.selectedDish.result !== null ? this.props.store.dispatch(fetchDishSucceedAction(storedState.selectedDish.result)) : 
    storedState.selectedDish.error ? this.props.store.dispatch(fetchDishAction(storedState.selectedDish.id)) : {};
    this.props.store.dispatch(fetchSearchDishesSucceedAction(storedState.dishSearchResults.result));
    this.props.store.dispatch(setSidebarCollapsedAction(storedState.userPrefs.sidebarCollapsed));
  }


  render() {
    return (
      <div>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/details" component={DishDetailsView} />
        <Route exact path="/overview" component={OverviewView} />
        <Route exact path="/printout" component={PrintoutView} />
      </div>
    );
  }
}


export default App;
