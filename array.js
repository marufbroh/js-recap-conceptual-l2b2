// map(), forEach(), find(), filter()

// map()
const numbers = [10, 20, 30, 40, 50, 60, 70];

const dabbleNumber = numbers.map((num) => num * 2);

// console.log(dabbleNumber);

// forEach();
// numbers.forEach((num) => console.log(num));

// numbers.forEach((num) => {
//    console.log(num);
// });

// find() , find first element of an array
// console.log(numbers.find((num) => num < 40));


// filter() --> return new array with match value
const matchNumber = numbers.filter(num => num < 50);

console.log(matchNumber);