import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './recipe.css';
import Button from "../Button/button";
import Loader from "../Loader/loader";

//Validation of the props received
Recipe.propTypes = {
  addToMenu: PropTypes.func.isRequired,
  selectedDish: PropTypes.object.isRequired,
  numberOfGuests: PropTypes.number.isRequired,
};

/**
 * Recipe presentation component.
 * The function is bound to the redux state by the component container using "redux.connect()"
 * @param {*} props 
 */
function Recipe(props) {
  let isLoading = props.selectedDish.inProgress;
  let dish = props.selectedDish.result;
  return (
    <div className="recipeview-container">
      <Loader visible = {isLoading}/>
      <div className="recipe-view-row-col">
        <div id="dish-title"><h2>{dish ? dish.title : "Dish Title"}</h2></div>
        {
          dish ? <img src={dish.image} style={{ width: "100%" }} alt={dish.title}/> : null
        }
        <div className="dish-description" style={{ textAlign: "justify", fontSize: "80%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis,
          quam vitae lobortis pharetra, arcu felis tempus nisl, a rhoncus nisl nisl
          quis orci. Sed faucibus, sapien at lobortis placerat, nisl velit feugiat
          nulla, vitae consectetur enim libero ut tortor. Proin erat mauris, pretium
          eget sapien quis, auctor semper sem.
        </div>
        <Link to="/search">
          <Button>
            Back to search
          </Button>
        </Link>
        <div><h2>PREPARATION</h2></div>
        <div className="instructions-container">
          {
            dish && dish.analyzedInstructions && dish.analyzedInstructions[0] ?
              (dish.analyzedInstructions[0].steps.map((stepInfo, index) => (
                <div key={"instructions-" + index} style={{ paddingTop: "1em" }}>
                  <p>{stepInfo.number + ": " + stepInfo.step}</p>
                </div>)))
              :
              "Instructions not clear, try sticking all the ingredients in a blender (API did not provide instructions)"
          }
        </div>
      </div>
      <div className="recipe-view-row-col">
        <div className="recipe-ingredients" style={{ padding: "1em" }}>
          <div>
            <span>Ingredients for {props.numberOfGuests} people</span>
          </div>
          <div className="ingredients-inner" style={{ padding: "1em" }}>
            <hr className="horizontal-line" />
            <table className="ingredientslist-table" style={{ width: "100%", paddingLeft: "1em", paddingRight: "1em" }}>
              <tbody>
                {
                  dish ? dish.extendedIngredients.map((ingredient, index) => (
                    <tr key={"ingredient-row-" + index}>
                      <th>{parseFloat(parseFloat(ingredient.measures.metric.amount)*props.numberOfGuests).toFixed(1) + " " + ingredient.measures.metric.unitShort}</th>
                      <th>{(ingredient.meta[0] || "") + " " + ingredient.name}</th>
                      <th>SEK</th>
                      <th>??</th>
                    </tr>)) : null
                }
              </tbody>
            </table>
            <hr className="horizontal-line" />
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <Button onClick={() => props.addToMenu(dish)}>
                Add to menu
              </Button>
              <div>
                <span className="total price">SEK {dish ? (props.numberOfGuests*dish.pricePerServing).toFixed(2) : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;