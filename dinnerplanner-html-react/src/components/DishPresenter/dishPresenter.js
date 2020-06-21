import React, { Component } from "react";
import "./dishPresenter.css";

class DishPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.dishes.length === 0)
      return <div className="nodish">No Dish Chosen!</div>;
    else {
      let dishOverviews = this.props.dishes.map((dish, i) => (
        <div className="dishdiv" key={i}>
          <img className="picdiv" src={dish.image} alt={dish.dishTitle} />
          <div className="namediv value-main-course-name">{dish.title}</div>
          <div className="pricediv">
            {dish.pricePerServing.toFixed(2) + " SEK"}
          </div>
        </div>
      ));

      return <div className="dishpresenter">{dishOverviews}</div>;
    }
  }
}

export default DishPresenter;
