import React from "react";
import "../../styles/List.css";
import { Link } from "react-router-dom";
import "../../styles/Link.css";
export const List = (props) => {
  return (
    <div className="list">
      <img alt={props.car} src={props.image} />
      <span>Price:{props.price}</span>
      <div className="List-item-details">
        <Link to={`/card-details/${props.id}`} className="link">
          <div>
            <strong> {props.car}</strong>
          </div>
        </Link>

        <div>
          <strong>Model:</strong> {props.car_model}
        </div>
        <div>
          <strong>Color:</strong> {props.car_color}
        </div>
        <div>
          <strong>Year:</strong> {props.car_model_year}
        </div>
        <div>
          <strong>Availablility:</strong>{" "}
          {props.availability ? "Available" : "Not Available"}
        </div>
      </div>
    </div>
  );
};
