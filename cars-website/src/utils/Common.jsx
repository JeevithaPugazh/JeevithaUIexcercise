import { FILTER_KEYS } from "./Constant";

export const getRandomPrice = () => {
  return Math.floor(Math.random() * (30000 - 10000)) + 10000;
};

//Get all car list
export const carList = (originalData) => {
  let listOfCars = originalData.forEach((car) => {
    listOfCars[car.car] = { ...car };
  });

  return listOfCars;
};

export const getCompanies = (listOfCars) => {
  const carCompanies = new Set(listOfCars.map((car) => car.car));
  return [...carCompanies];
};

export const getCarModels = (listOFCars, company) => {
  const carModels = new Set(
    listOFCars.filter((car) => car.car === company).map((car) => car.car_model)
  );
  return [...carModels];
};

export const getCarColors = (listOFCars, company, model) => {
  const carColors = new Set(
    listOFCars
      .filter((car) => car.car === company && car.car_model === model)
      .map((car) => car.car_color)
  );
  return [...carColors];
};

export const getFilteredCars = (
  listOfCars = [],
  filters = {}
  // company,
  // model,
  // color,
  // minPrice,
  // maxPrice,
  // minYear,
  // maxYear
) => {
  let filteredCars = listOfCars;
  if (filters[FILTER_KEYS.COMPANY.key]) {
    filteredCars = filteredCars.filter(
      (car) => car.car === filters[FILTER_KEYS.COMPANY.key]
    );
  }
  if (filters[FILTER_KEYS.MODEL.key]) {
    filteredCars = filteredCars.filter(
      (car) => car.car_model === filters[FILTER_KEYS.MODEL.key]
    );
  }
  if (filters[FILTER_KEYS.COLOR.key]) {
    filteredCars = filteredCars.filter(
      (car) => car.car_color === filters[FILTER_KEYS.COLOR.key]
    );
  }
  if (
    filters[FILTER_KEYS.MIN_PRICE] >= 0 &&
    filters[FILTER_KEYS.MAX_PRICE] <= 0
  ) {
    filteredCars = filteredCars.filter(
      (car) =>
        car.price >= filters[FILTER_KEYS.MIN_PRICE] &&
        car.price <= filters[FILTER_KEYS.MAX_PRICE]
    );
  }
  // if (minYear && maxYear) {
  //   filteredCars = filteredCars.filter(
  //     (car) => car.car_model_year >= minYear && car.car_model_year <= maxYear
  //   );
  // }

  return filteredCars;
};

export const minPrices = [
  1000, 5000, 10000, 15000, 20000, 25000, 50000, 75000, 100000,
];
export const maxPrices = [
  5000, 10000, 15000, 20000, 25000, 50000, 75000, 100000,
];

export const RangeYear = () => {
  const date = new Date();
  let year = date.getFullYear();
  let startYear = 1990;
  const years = Array.from(
    { length: year - startYear + 1 },
    (_, index) => startYear + index
  );
  return years;
};
