const target = {
  name: "John",
  age: 30,
};

const source = {
  city: "New York",
};

Object.assign(target, source);

console.log(target);
// Output:
// {
//   name: "John",
//   age: 30,
//   city: "New York"
// }
