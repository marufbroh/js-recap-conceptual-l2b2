// arrow func

// function add(a, b){
//     return a+b;
// }

const add = (a, b) => a + b; // single expression

const add1 = (a, b) => { // multi line expression
    const result = a+b;
    return result
}

console.log(add1(2, 3));
