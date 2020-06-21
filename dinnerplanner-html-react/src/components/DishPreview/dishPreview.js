import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './dishPreview.css';

/**
 * Dish preview component. To be used in search results.
 * onclick should be set on the component instance.
 * @param {*} props 
 */
function DishPreview(props) {
  return (
    <Link to="/details" style={{ textDecoration: 'none', color: 'black' }}>
    <div className="small-dish-preview" onClick={props.dishPreviewClicked}>
      <div className="small-dish-preview-container">
        <img 
          className="small-dish-preview-image" 
          src={"https://spoonacular.com/recipeImages/" + props.dishImageURL} 
          alt={props.dishTitle}/>
        <div className="small-dish-preview-text">
          {props.dishTitle}
        </div>
      </div>
    </div>
    </Link>
  );
}

DishPreview.propTypes = {
  dishImageURL: PropTypes.string.isRequired,
  dishTitle: PropTypes.string.isRequired,
  dishPreviewClicked: PropTypes.func.isRequired
};

export default DishPreview;