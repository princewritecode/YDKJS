//**  Possible ways to create object in javascript */

/**
const obj = {};
obj.name = "prince";
const obj1 = new Object;
obj1.name = "tanisha";
console.log(obj);
console.log(obj1);
*/

//** What is prototype chaining */

/**

let arr = ["prince", "patel"];
console.log(arr);
console.log(arr.length);

const me = {
    talk() {
        return 'talking';
    }
};
console.log(me.talk());
const you = {
    talk() {
        return 'Talking';
    }
};
console.log(you.talk());

class Person {
    talk() {
        return 'Talking';
    }
}
const Me = new Person();
console.log(Me.talk());
const You = new Person();
console.log(You.talk());
*/

//** JSON and it's common operation  */
/*
const text = '{"name": "prince", "age": 27}';
const data = JSON.parse(text);
console.log(data);
const networkData = JSON.stringify(data);
console.log(networkData);
*/


//** Ternary operator */
/*
const a = 21;
console.log((a > 20) ? true : false);
*/
//** difference between let and const and var */
/*
function playVar() {
    var usingVar = 20;
    if (true) {
        var usingVar = 66;
        console.log(usingVar);
    }
    console.log(usingVar);
}
*/
/** let var difference */
/*
function playLet() {
    let usingLet = 40;
    if (true) {
        let usingLet = 20;
        console.log(usingLet);
    }
    console.log(usingLet);
}
playVar();
playLet();
*/
/*
function varScoping() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // will print 2
    }
    console.log(x); // will print 2
}
*/
/*
function letScoping() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }
    console.log(x); // will print 1
}
*/
//** callback functions */
/*
function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
}
*/
/*
let a = 20;
let b = 30;
    (function add() {
        console.log(a + b);
    })();*/

// const array = [[[[1, 2, 3]]]];
// console.log(array[0][0][0][1]);
/*
const friend1 = { a: { firstName: "aha", lastName: "oho", id: 123 } };
const friend2 = { b: { firstName: "ra", lastName: "arara", id: 1234 } };
const friend3 = { c: { firstName: "goi", lastName: "", id: 12345 } };
const people = {
    friends: []
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
*/

/*
const right = false;
console.log(right);
if (right) console.log("this is right buddy");
if (!right) console.log("this is false buddy");
*/

/*
const randomNumber = Math.floor(Math.random() * 5);
const enterNumber = Number(prompt("enter a number"));

switch (enterNumber) {
    case (randomNumber === enterNumber):
        console.log(` entered number ${enterNumber} is equal to ${randomNumber}`);
        break;
    default:
        console.log("Not");
}

*/


