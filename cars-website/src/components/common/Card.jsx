import React from "react";
import "../../styles/Card.css";
import { Link } from "react-router-dom";
import "../../styles/Link.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img alt={props.car} src={props.image} />

      <span>Price:{props.price}</span>

      <div className="car-company">
        <Link to={`/card-details/${props.id}`} className="link">
          <div className="company">{props.car}</div>
        </Link>
        <div>Model:{props.car_model}</div>
      </div>
    </div>
  );
};
