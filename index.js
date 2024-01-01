// const greetNextLevelDevelopers = (name) => {
//   console.log(`Hello ${name}, Welcome to the next level journey`);
// };

// const greeProLevelDevelopers = (name) => {
//   console.log(`Hello ${name}, Welcome to the next level journey`);
// };

// export const greetUltraLevelDevelopers = (name) => {
//   console.log(`Hello ${name}, Welcome to the next level journey`);
// };

// export { greeProLevelDevelopers, greeProLevelDevelopers };
// // greetNextLevelDevelopers("Tamim")

// export default greetNextLevelDevelopers;

// Array destructure

const myFriends = ["Tamim", "Iqbal", "Maruf"];

// console.log(myFriends[0]);

const [bestFriend, ...rest] = myFriends;

// console.log(bestFriend, rest);

// object destructure
const myAddress = {
  gram: "Tarowa",
  sohor: "Narsingdi Sadar",
  jela: "Narsingdi",
};

const { jela } = myAddress;
// console.log(jela);
// console.log(myAddress.gram);
// console.log(myAddress["sohor"]);

// // optional chaining
// console.log(myAddress.postal?.code); // postal jodi thake tahole shamne agabo

// Ternary Operator, Truthy, Falsy

const postalCode = myAddress.postal?.code ? myAddress.postal.code : 400;

console.log(postalCode);
