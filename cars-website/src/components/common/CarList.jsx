import React, { useState, useContext } from "react";
import "../../styles/CarList.css";
import { Pagination, CardContainer } from "../common";
import { CarContext } from "../context/CarContext";
import { getFilteredCars } from "../../utils/Common";

export const CarList = (props) => {
  const { filters, cars } = useContext(CarContext);
  const filteredCars = getFilteredCars(cars || [], filters);
  const [viewDetails, setViewDetails] = useState([]);

  // useEffect(function, []) // First time while component loading
  // useEffect(function, [<props, props.property, some state, ...,>]) // Executes when changes the state variables or props
  // useEffect(function) // executes all the time when component renders

  return (
    <div className="carList-container">
      {cars != null ? (
        <>
          {viewDetails.length === 2 ? (
            <CardContainer
              cars={filteredCars.slice(viewDetails[0], viewDetails[1])}
            />
          ) : null}

          <Pagination
            totalDatalength={filteredCars.length}
            setViewDetails={setViewDetails}
          />
        </>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};
