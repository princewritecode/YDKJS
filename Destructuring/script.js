/*
console.log("Welcome to Destructuring in javascript");
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
console.log(alphabet[0]);
console.log(alphabet[1]);
const numbers = ['1', '2', '3', '4', '5', '6', '7'];
*/
//spread operator
/*
const [a, , c, , e, ...remain] = alphabet;
console.log(a, c, e);
console.log(remain);
*/
//now creating a copy of an array called alphabet
/*
const [...full] = alphabet;
console.log(full);
console.log(full.length);
full[9] = "J";
console.log(full);
console.log(alphabet);
*/
//now let's add two array or combine two arrays

// const [...newer] = numbers;
// const newArr = [...full, ...newer];
// console.log(newArr);

// function sumAndMultiply(a, b) {
//     return [a + b, a * b, a / b];
// }
// const array = sumAndMultiply(2, 3);
// console.log(array);
// const [sum, multiple, division] = sumAndMultiply(2, 4);
// console.log(sum);
// console.log(multiple);
// console.log(division);

/* Object destructuring with example */

/*
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
*/
/*
let person = {
    firstName: "prince",
    lastName: "patel",
    currentAge: 27
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

personFirstName;
personLastName;

let { firstName, lastName, middleName = "coder", currentAge = 26 } = person;
console.log(firstName, lastName, middleName, currentAge);
*/
//** We can also rename the variables with the new way  */
/*
let { firstName: fName, lastName: lName } = person;
console.log(fName, lName);
*/


//** destructuring example of arrays */
/*

const arra1 = [1, 2, 3, 4];
const [x, y, z, b] = arra1;
console.log(x, y, z);

const arrValue = ['one', 'two', 'three'];
const [f, , d] = arrValue;
console.log(f, d);
*/
/*
const arrValue = ["prince", "walker", "loner", "billionaire"];
const [d, b, ...newValu] = arrValue;
console.log(b, d, newValu);
/*
//**swapping name in one line of code */

/*
let nameOne = "prince";
let nameTwo = "tanisha";

[nameOne, nameTwo] = [nameTwo, nameOne];
console.log(nameOne);


let number = {
    id: 1, name: {
        firstName: "prince",
        lastName: "patel"
    }
};

let { name: { firstName, lastName } } = number;
console.log(firstName, lastName);
*/
// reduce in javascript practice
/**
 * The reduce() method executes a reducer function for array element
 * The reduce () method returns a single value: the function's accumulated value
 * The reduce() method does not execute the funtion for empty array elements
 * The reduce() method does not change the original array
 *
 */

//array.reduce(function(total,currentValue,currentIndex,arr),initialValue)
//old calculating numbers on a regular for loop:

/*
function sumVal(arr) {
    let sum = 0;
    for (const val of arr) {
        sum += val;
    }
    return sum;
}
console.log(sumVal([1, 3, 5, 7]));

*/


