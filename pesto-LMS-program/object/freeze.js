const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);

person.name = "Jane"; // This assignment will have no effect.


console.log(person); // Output: { name: "John", age: 30 }
