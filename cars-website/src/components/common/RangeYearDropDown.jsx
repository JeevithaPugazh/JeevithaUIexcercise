import React from "react";
import { RangeYear } from "../../utils/Common";
import "../../styles/SideBar.css";
export const RangeYearDropDown = (props) => {
  return (
    <div className="price-range">
      <div className="price-label">
        <label>Years:</label>
      </div>
      <label>From:</label>
      <select
        name="min"
        value={props.minYear}
        onChange={(event) => {
          props.onMinYearChange(event.target.value);
        }}
      >
        {RangeYear().map((number) => (
          <option value={number}>{number}</option>
        ))}
        ;
      </select>
      <label>To:</label>
      <select
        name="max"
        value={props.maxYear}
        onChange={(event) => props.onMaxYearChange(event.target.value)}
      >
        {RangeYear().map((number) => (
          <option value={number}>{number}</option>
        ))}
        ;
      </select>
    </div>
  );
};
