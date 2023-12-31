const myArray = [1, 2, 3];

// Spread operators
const myCopyArray = [...myArray];
myCopyArray.push(6);

// console.log(myArray);
// console.log(myCopyArray);

// rest operator
const myAddFunction = (...rest) => {
  // console.log(rest);
 return rest.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const result = myAddFunction(1, 2, 3, 4, 5, 6);
// console.log(result);


// spread operator for object reference type
const myObj = {
    name: "Tamim",
    position: "Web Dev"
}

const myAnotherObj = {
    age: 25,
    location: "Dhaka"
};

const myFinalObj = {
    ...myObj,
    ...myAnotherObj
};

console.log(myFinalObj);
