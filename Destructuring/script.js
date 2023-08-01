console.log("Welcome to Destructuring in javascript");
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(alphabet[0]);
console.log(alphabet[1]);
const numbers = ['1', '2', '3', '4', '5', '6', '7'];

//spread operator
const [a, , c, , e, ...remain] = alphabet;
console.log(a, c, e);
console.log(remain);

//now creating a copy of an array called alphabet
const [...full] = alphabet;
console.log(full);
console.log(full.length);
full[9] = "J";
console.log(full);
console.log(alphabet);

//now let's add two array or combine two arrays

const [...newer] = numbers;
const newArr = [...full, ...newer];
console.log(newArr);

function sumAndMultiply(a, b) {
    return [a + b, a * b, a / b];
}
const array = sumAndMultiply(2, 3);
console.log(array);
const [sum, multiple, division] = sumAndMultiply(2, 4);
console.log(sum);
console.log(multiple);
console.log(division);