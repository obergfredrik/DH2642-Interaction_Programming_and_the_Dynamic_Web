import {API_KEY, ENDPOINT } from './apiConfig'
export const MODIFY_NAME = "MODIFY_NAME";
export const SAVE_NAME = "SAVE_NAME";
export const SET_NUMBER_GUESTS = "SET_NUMBER_GUESTS"
export const ADD_DISH = "ADD_DISH"
export const REMOVE_DISH = "REMOVE_DISH"
export const SET_DISHES = "SET_DISHES" 
export const SET_RECIPE_DETAILS_DISH = "SET_RECIPE_DETAILS_DISH"
export const DELETE_LAST_SEARCH = "DELETE_LAST_SEARCH" 
export const REPLACE_LAST_SEARCH = "REPLACE_LAST_SEARCH" 
export const SET_TOTAL_MENU_PRICE = "SET_TOTAL_MENU_PRICE"
export const SET_SIDEBAR_COLLAPSED = "SET_SIDEBAR_COLLAPSED"
export const REPLACE_AUTO_COMPLETE = "REPLACE_AUTO_COMPLETE"
export const FETCH_DISH_START = "FETCH_DISH_START"
export const FETCH_DISH_SUCCEED = "FETCH_DISH_SUCCEED"
export const FETCH_DISH_FAIL = "FETCH_DISH_FAIL"
export const FETCH_DISH_SEARCH_START = "FETCH_DISH_SEARCH_START"
export const FETCH_DISH_SEARCH_SUCCEED = "FETCH_DISH_SEARCH_SUCCEED"
export const FETCH_DISH_SEARCH_FAIL = "FETCH_DISH_SEARCH_FAIL"
export const FETCH_AUTOCOMPLETE_START = "FETCH_DISH_START"
export const FETCH_AUTOCOMPLETE_SUCCEED = "FETCH_DISH_SUCCEED"
export const FETCH_AUTOCOMPLETE_FAIL = "FETCH_DISH_FAIL"

//Thunk style dispatch
export function fetchDishAction(id) {
    return (dispatch) => {
        dispatch(fetchDishStartAction(id));
        return fetch(ENDPOINT +'/recipes/' + id + '/information', {headers:{'X-Mashape-Key': API_KEY}})
        .then(response => response.json())
        .then(responseJson => {
            dispatch(fetchDishSucceedAction(responseJson))
        })
        .catch((error) => {
            dispatch(fetchDishFailAction(error))
        })
    };
}

//Thunk style dispatch
export function fetchAutoComplete(pattern, numSuggestions = 4) {
    return (dispatch) => {
        dispatch(fetchAutoCompleteStartAction());
        return fetch(ENDPOINT + '/recipes/autocomplete?number=' + numSuggestions + '&query=' + pattern,
        {headers:{'X-Mashape-Key': API_KEY}})
        .then(response => response.json())
        .then(responseJson => {
            dispatch(fetchAutoCompleteSucceedAction(responseJson))
        })
        .catch((error) => {
            dispatch(fetchAutoCompleteFailAction(error))
        })
    };
}


//Thunk style dispatch
export function fetchSearchDishesAction(type = '', query = '') {
    return (dispatch) => {
        dispatch(fetchSearchDishesStartAction());
        return fetch(ENDPOINT + '/recipes/search?type=' + type + '&query=' + query , 
        {headers:{'X-Mashape-Key': API_KEY}})
        .then(response => response.json())
        .then(responseJson => {
            dispatch(fetchSearchDishesSucceedAction(responseJson.results))
        })
        .catch((error) => {
            dispatch(fetchSearchDishesFailAction(error))
        })
    };
}

const fetchAutoCompleteStartAction = () => {return { type: FETCH_DISH_START}};
const fetchAutoCompleteSucceedAction = result => {return { type: FETCH_DISH_SUCCEED, result: result }};
const fetchAutoCompleteFailAction = error => {return {type: FETCH_DISH_FAIL, result: { error }}};
const fetchSearchDishesStartAction = () => {return { type: FETCH_DISH_SEARCH_START}};
export const fetchSearchDishesSucceedAction = result => {return { type: FETCH_DISH_SEARCH_SUCCEED, result: result }};
const fetchSearchDishesFailAction = error => {return {type: FETCH_DISH_SEARCH_FAIL, result: { error }}};
const fetchDishStartAction = (id) => {return { type: FETCH_DISH_START, id: id}};
export const fetchDishSucceedAction = dish => {return { type: FETCH_DISH_SUCCEED, result: { dish }}};
const fetchDishFailAction = error => {return {type: FETCH_DISH_FAIL, result: { error }}};

export function setNoGuestsAction(num) {return {type: SET_NUMBER_GUESTS, guestAmount: num}};
export const addDishAction = dish => {return {type: ADD_DISH, dish: dish}};
export function removeDishAction(id) {return {type: REMOVE_DISH, id: id}};
export function setDishAction(dishes) {return {type: SET_DISHES, dishes: dishes}};
export function setRecipeDetailsDishAction(dish) {return {type: SET_RECIPE_DETAILS_DISH, recipe: dish}};
export function replaceLastSearchAction(searchResult) {return {type: REPLACE_LAST_SEARCH, result: searchResult}};
export function replaceLastAutocompleteAction(autoCompleteResults) {return {type: REPLACE_AUTO_COMPLETE, result: autoCompleteResults}};
export function deletelastSearch() {return {type: DELETE_LAST_SEARCH}};
export function setTotalMenuPriceAction(amount){return {type: SET_TOTAL_MENU_PRICE, totalPrice: amount}};
export function setSidebarCollapsedAction(isCollapsed){return {type: SET_SIDEBAR_COLLAPSED, isCollapsed: isCollapsed}};