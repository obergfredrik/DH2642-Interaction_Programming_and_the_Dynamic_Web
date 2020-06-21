import Button from "../Button/button";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./sideBar.css";

//Validation of the props received
SideBar.propTypes = {
  setNumberOfGuests: PropTypes.func.isRequired,
  toggleSidebarCollapsed: PropTypes.func.isRequired,
  totalPrice: PropTypes.string.isRequired,
  removeDish: PropTypes.func.isRequired,
  dishes: PropTypes.array.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
  userPrefs: PropTypes.object.isRequired
}

function SideBar(props) {
  return (
    <div className="sidebar">
      <div
        className="sidebarcontainer"
        style={{ height: props.userPrefs.sidebarCollapsed ? "0" : "100%" }}>
        <div className="sidebar-row">
          <div>
            <h2>My Dinner</h2>
          </div>
          <div
            className="collapse-button"
            id="collapse-button"
            onClick={() =>
              props.toggleSidebarCollapsed(!props.userPrefs.sidebarCollapsed)
            }>
            {props.userPrefs.sidebarCollapsed ? "expand" : "collapse"}
          </div>
        </div>
        <div className="sidebar-input-info">
          People&nbsp;
          <input
            type="number"
            style={{ width: "2em" }}
            onChange={evt => props.setNumberOfGuests(evt.target.value)}
            value={props.numberOfGuests}/>
        </div>
        <div className="sidebar-description-bar">
          <div style={{ paddingLeft: "25px" }}>Dish Name</div>
          <div style={{ paddingRight: "25px" }}>Cost</div>
        </div>
        <div id="dishlistcontainer" />
        {props.dishes.map((dish, index) => (
          <div
            className="dishlist-element"
            key={"sidebar-dish-list-" + index}>
            <div className="dishlist-text">{dish.title}</div>
            <div style={{ paddingRight: "1em" }}>
              {Math.round(dish.pricePerServing * props.numberOfGuests)}
              <span
                className="button-remove-dish"
                onClick={() => props.removeDish(dish.id)}>
                {" X"}
              </span>
            </div>
          </div>
        ))}
        <div className="sidebar-total-price">SEK: {props.totalPrice}</div>
        <Link
          to="/overview"
          style={{ textAlign: "center", paddingTop: "2em" }}>
          <Button>Confirm Order</Button>
        </Link>
      </div>
    </div>
  );
}


export default SideBar;
