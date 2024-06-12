import { useState, createContext, useEffect } from "react";
import { getCars } from "../../utils/Api";

export const CarContext = createContext();
export const CarProvider = (props) => {
  const [filters, setFilters] = useState({});
  const [cars, setCars] = useState(null);
  const [carCompany, setCarCompany] = useState("");
  const [carModel, setCarModel] = useState("");
  const updateFilters = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };
  useEffect(() => {
    const carPromise = getCars();
    carPromise.then((carList) => {
      setCars([...carList]);
      console.log(setCars);
    });
    carPromise.catch((error) => console.log(error));
  }, []);

  return (
    <CarContext.Provider
      value={{
        filters,
        updateFilters,
        cars,
        setCars,
        carCompany,
        setCarCompany,
        carModel,
        setCarModel,
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};
