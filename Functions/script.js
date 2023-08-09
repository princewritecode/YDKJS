//function is a small chunk of code that can be used multiple times
/*
function add(x, y) {
    return x + y;
}
console.log(add(3, 4));
*/
//functin expression
/*
const addition = function (x, y) {
    return x + y;
};
console.log(addition(55, 55));
*/




//!map function in javascript
let arr = [3, 4, 5, 6];
//* Task: multiply each number of the array by 3.
let modifiedArr = [];
for (let i = 0; i < arr.length; i++) {
    modifiedArr[i] = arr[i] * 3;
};
console.log(modifiedArr);
//!above is traditional way below is map way
//* each element in array is transformed by the function and returned in a new array that is how map works.
const array = [2, 4, 6, 8, 9, 7, 5, 3];
const result = array.map((elem) => {
    return elem * 3;
});
console.log(result);
console.log(array);

//!filter function in javascript
//* each element in array is checked for the condition if true than put that element in array
const array1 = [2, 4, 6, 8, 9, 7, 5, 3];
const newArr = array1.filter((elem) => {
    if (elem % 2 == 0) {
        return elem;
    }
});
console.log(array1);
console.log(newArr);

//! reduce function in javascript
//* it is used to reduce the array to a single value
const arr2 = [5, 1, 3, 2, 6];

function findSum(arr2) {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];
    }
    return sum;
};
console.log(findSum(arr2));
//! above is traditional way below is reduce way
const output = arr2.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);
//*curr or current represents the current element in the array while we are iterating
//*acc or accumulator is used to accumulates the value like for example sum that we did.