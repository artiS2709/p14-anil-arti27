const car = {
  brand: "Toyota",
  year: 2020,
};

Object.seal(car);

delete car.year; // This deletion will have no effect.

car.price = 25000; // This addition will have no effect.

console.log(car);
// Output:
// {
//   brand: "Toyota",
//   year: 2020
// }
