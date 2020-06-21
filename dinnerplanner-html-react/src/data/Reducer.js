/**
* Used a MVC to redux guide: https://hackernoon.com/thinking-in-redux-when-all-youve-known-is-mvc-c78a74d35133
* This acts as the model for the project,
* e.g. getAllDishes is replaced with a 2 stage async action. 
* The views are updated on new data automatically using redux.connect(), which replaces the observer pattern implementation. 
*/

import * as constants from './Actions';

//State reducer
function reducer(state = {}, action) {
  return {
    dishes: dishes(state.dishes, action),
    numberOfGuests: numberOfGuests(state.numberOfGuests, action),
    userPrefs: userPrefs(state.userPrefs, action),
    selectedDish: fetchDishReducer(state.selectedDish, action),
    dishSearchResults: searchForDishReducer(state.dishSearchResults, action)
  };
}

//Fetch dish reducer
function fetchDishReducer(state = { result: null, inProgress: false, error: null }, action) {
  switch (action.type) {
    case constants.FETCH_DISH_START:
      return {
        ...state,
        inProgress: true,
        result: null,
        id: action.id
      };
    case constants.FETCH_DISH_SUCCEED:
      return {
        ...state,
        inProgress: false,
        result: action.result.dish
      };
    case constants.FETCH_DISH_FAIL:
      console.log("WAS ERROR")
      return {
        ...state,
        inProgress: false,
        error: action.result.error,
        result: null
      };
    default:
      return state;
  }
}

//Search for dish reducer
function searchForDishReducer(state = { result: [], inProgress: false, error: null }, action) {
  switch (action.type) {
    case constants.FETCH_DISH_SEARCH_START:
      return {
        ...state,
        inProgress: true,
        result: []
      };
    case constants.FETCH_DISH_SEARCH_SUCCEED:
      return {
        ...state,
        inProgress: false,
        result: action.result
      };
    case constants.FETCH_DISH_SEARCH_FAIL:
      return {
        ...state,
        inProgress: false,
        error: action.result.error,
        result: []
      };
    default:
      return state;
  }
}

//Guests reducer
function numberOfGuests(state = 1, action) {
  switch (action.type) {
    case constants.SET_NUMBER_GUESTS:
      return Math.max(action.guestAmount, 1);
    default:
      return state;
  }
}

//Dishes reducer
function dishes(state = [], action) {
  switch (action.type) {
    case constants.ADD_DISH:
      return [...state, action.dish];
    case constants.REMOVE_DISH:
      return state.filter(dish => dish.id !== action.id);
    case constants.SET_DISHES:
      return action.dishes;
    default:
      return state;
  }
}

function userPrefs(state = { sidebarCollapsed: false }, action) {
  switch (action.type) {
    case constants.SET_SIDEBAR_COLLAPSED:
      return {
        ...state,
        sidebarCollapsed: action.isCollapsed
      };
    default:
      return state;
  }
}

export default reducer;