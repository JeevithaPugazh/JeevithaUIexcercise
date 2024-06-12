import React, { useContext } from "react";
import "../../styles/SideBar.css";
import { getCompanies, getCarModels, getCarColors } from "../../utils/Common";
import { DropDown } from "./DropDown";

import { PriceDropDown } from "./PriceDropDown";
import { RangeYearDropDown } from "./RangeYearDropDown";
import { CarContext } from "../context/CarContext";
import { FILTER_KEYS } from "../../utils/Constant";
export const SideBar = (props) => {
  const { cars, filters, carCompany } = useContext(CarContext);

  return (
    <div className="sideBar-container">
      <div className="sideBar-heading">Filters</div>

      {cars !== null && (
        <>
          <DropDown
            label="Company Name:"
            id="company"
            filterType={FILTER_KEYS.COMPANY}
            list={getCompanies(cars)}
          />
          <DropDown
            label="Model:"
            id="model"
            filterType={FILTER_KEYS.MODEL}
            value={filters[FILTER_KEYS.MODEL.key]}
            list={getCarModels(cars, filters[FILTER_KEYS.COMPANY.key])}
          />

          <DropDown
            label="Color:"
            id="color"
            filterType={FILTER_KEYS.COLOR}
            value={filters[FILTER_KEYS.COLOR.key]}
            list={getCarColors(
              cars,
              filters[FILTER_KEYS.COMPANY.key],
              filters[FILTER_KEYS.MODEL.key]
            )}
          />
          <PriceDropDown />
          <RangeYearDropDown
            minYear={props.minYear}
            onMinYearChange={props.setMinYear}
            maxYear={props.maxYear}
            onMaxYearChange={props.setMaxYear}
          />
        </>
      )}
    </div>
  );
};
