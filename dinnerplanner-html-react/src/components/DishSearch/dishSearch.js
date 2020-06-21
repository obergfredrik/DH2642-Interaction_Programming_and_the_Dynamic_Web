import PropTypes from 'prop-types';
import React, { useState } from "react";
import Button from "../Button/button";
import "./dishSearch.css";


DishSearch.propTypes = {
  searchForDish: PropTypes.func.isRequired
};

function DishSearch(props) {
  const [textInputVal, setTextInput] = useState("");
  const [typeInputVal, setTypeInput] = useState("");
  let dropdownOptions = [
    { value: "", name: "Select A Type" },
    { value: "main course", name: "Main course" },
    { value: "side dish", name: "Side Dish" },
    { value: "dessert", name: "Dessert" },
    { value: "starter", name: "Starter" }]

  return (
    <div className="dishsearch">
      <div style={{ textAlign: "left", padding: "1em" }}>Find a Dish</div>
      <div className="search-area" style={{ display: "inline-block" }}>
        <input className = "search-input"
          type="text"
          placeholder="Enter key words"
          value = {textInputVal}
          onChange={evt => { setTextInput(evt.target.value);}}
          onKeyUp={(evt) => evt.keyCode !== 13 || props.searchForDish(typeInputVal, textInputVal)}
          />
          <div className="search-controls-container">
          <select className="dish-type-selector"
            onChange={evt => {setTypeInput(evt.target.value)}}>
            { dropdownOptions.map((option, i) => (
              <option value={option.value} key={i}>
                {option.name}
              </option>)) }
          </select>
          <Button onClick={()=>{props.searchForDish(typeInputVal, textInputVal)}}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}


export default DishSearch;
