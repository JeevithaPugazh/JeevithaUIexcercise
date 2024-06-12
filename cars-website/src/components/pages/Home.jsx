import React from "react";
import "../../styles/Home.css";
import { SideBar } from "../common/SideBar";
import { CarList } from "../common/CarList";

import { CarProvider } from "../context/CarContext";

export const Home = ({
  carColors,
  setCarColors,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
}) => (
  <CarProvider>
    <div className="contnet">
      <>
        <SideBar
          carColors={carColors}
          setCarColors={setCarColors}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minYear={minYear}
          setMinYear={setMinYear}
          maxYear={maxYear}
          setMaxYear={setMaxYear}
        />

        <CarList />
      </>
    </div>
  </CarProvider>
);
