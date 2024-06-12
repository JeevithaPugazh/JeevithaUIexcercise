import React, { useContext } from "react";
import { minPrices, maxPrices } from "../../utils/Common";
import "../../styles/SideBar.css";
import { CarContext } from "../context/CarContext";
import { FILTER_KEYS } from "../../utils/Constant";
export const PriceDropDown = (props) => {
  const { filters, updateFilters } = useContext(CarContext);
  return (
    <div className="price-range">
      <div className="price-label">
        <label>Price Range:</label>
      </div>
      <label>Min:</label>
      <select
        name="min"
        value={filters[FILTER_KEYS.MIN_PRICE]}
        onChange={(event) => {
          updateFilters(FILTER_KEYS.MIN_PRICE, event.target.value);
        }}
      >
        {minPrices.map((number) => (
          <option value={number}>{number}</option>
        ))}
      </select>
      <label>Max:</label>
      <select
        name="max"
        value={filters[FILTER_KEYS.MAX_PRICE]}
        onChange={(event) =>
          updateFilters(FILTER_KEYS.MAX_PRICE, event.target.value)
        }
      >
        {maxPrices.map((number) => (
          <option value={number}>{number}</option>
        ))}
      </select>
    </div>
  );
};
