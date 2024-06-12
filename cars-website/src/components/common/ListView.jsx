import React from "react";
import { List } from "./List";
import "../../styles/ViewMode.css";

export const ListView = (props) => {
  if (!Array.isArray(props.cars)) {
    return <div>No cars available</div>;
  }
  return (
    <div className="list-view">
      {props.cars.map((car, index) => (
        <List {...car} key={index} />
      ))}
    </div>
  );
};
