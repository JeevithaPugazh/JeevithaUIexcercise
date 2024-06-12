import React, { useEffect, useContext } from "react";
import "../../styles/SideBar.css";
import { CarContext } from "../context/CarContext";
import { FILTER_KEYS } from "../../utils/Constant";

export const DropDown = (props) => {
  const { filters, updateFilters } = useContext(CarContext);
  useEffect(() => {
    // props.list && updateFilters(props.filterName, props.list[0]);
  }, []);

  const onDropChange = (event) => {
    updateFilters(props.filterType.key, event.target.value);
  };
  return (
    <div className="dropDown-container">
      <label>{props.label}</label>
      <select
        className="sideBar-select"
        id={props.id}
        value={filters[props.filterType.key]}
        onChange={onDropChange}
      >
        <option>Select {props.filterType.label}</option>
        {props.list.map((item) => (
          <option value={item} key={`dropdown_${item}`}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
