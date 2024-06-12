import React from "react";
import { Card } from "./Card";
import "../../styles/ViewMode.css";

export const CardView = (props) => {
  if (!Array.isArray(props.cars)) {
    return <div>No cars available</div>;
  }
  return (
    <div className="card-view">
      {props.cars.map((car, index) => (
        <Card {...car} key={index} />
      ))}
    </div>
  );
};
