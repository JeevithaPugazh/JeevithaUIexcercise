// This method fetch all available cars...
export const getCars = async () => {
  const res = await fetch("https://myfakeapi.com/api/cars");
  const data = await res.json();
  let carList = data.cars;
  carList = carList.map((car) => ({
    ...car,
    image: "../images/2022-mercedes.jpg",
  }));
  return carList;
};

export const getCar = async (carId) => {
  const res = await fetch(`https://myfakeapi.com/api/cars/${carId}`);
  const data = await res.json();
  let carObject = {
    ...data.Car,
    image: "../images/2022-mercedes.jpg",
  };

  return carObject;
};
