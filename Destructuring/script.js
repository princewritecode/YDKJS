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

/* Object destructuring with example */


const personOne = {
    name: "prince",
    age: 27, address: {
        city: "Indore", state: "Another one of them"
    }
};
const personTwo = {
    name: "John Doe ",
    age: 32, address: {
        city: "somewhere else", state: "another one of them"
    }
};
const { name, age } = personTwo;
console.log(name);
console.log(age);
const { ...newObject } = personOne;
console.log(newObject);
const values = [22, 33, 44, [55, 66], 77];
console.log(Math.max(...values));

console.log(...values);


const arr = [1, 2, 3];
const arr2 = arr;
// arr2[0] = 5;
// console.log(arr);
// console.log(arr2);

const arr3 = [...arr];
arr3[0] = 5;


const arr4 = [1, 2, [3, 4, 5], 6, 7];
const arr5 = [...arr4];
arr5[2][0] = 6;


function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}
//Lydia 21

console.log(lone);
var lone = 22;
