const obj = {
  name: "John",
  age: 30,
};

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");

console.log(descriptor);

// Output:
// {
//   value: "John",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
