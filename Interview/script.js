//finding maximum number in array

/*
const arr = [22, 44, 33, 55, 966, 76, 6, 789];
let max = arr[0];
for (let i of arr) {
    console.log(i);
    if (i > max) {
        max = i;
    }
}
console.log(max);
*/

//Now using max function on array
/*
const arr = [22, 44, 33, 55, 966, 76, 6, 789];
console.log(Math.max(...arr));
console.log(...arr);
*/

//checking pallindrome
/*
let string = "heh";
(string.split("").reverse().join("") === string)
    ?
    console.log("it's a pallindrome")
    :
    console.log("not a pallindrome");

*/

//return only the even number
/*
let arr = [22, 43, 23, 24, 25, 54, 53];
const newArr = arr.filter((num) => {
    if (num % 2 === 0) { return num; }
});
console.log(newArr);
*/

