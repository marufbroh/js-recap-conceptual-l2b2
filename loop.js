// Basic For Loop:
for (let i = 0; i < 5; i++) {
  //   console.log(i);
}

// Looping through an Array:
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

for (const fruit of fruits) {
  //   console.log(fruit);
}

// Reverse Loop:
for (let i = 5; i > 0; i--) {
  // console.log(i);
}

// Looping through Object Properties:
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  // console.log(`${key}: ${person[key]}`);
}

// For...of Loop for Arrays:
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  //   console.log(number);
}

// Nested For Loop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
