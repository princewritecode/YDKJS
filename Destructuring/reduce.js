//calculatin numbers using reduce function

//**method 1 */

/*
function sum(arr) {
    const reducer = (total, value) => total + value;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
}
console.log(sum([1, 3, 5, 7]));

*/

//**method 2 */

/*
const array = [1, 3, 5, 7, 9, 4, 7];
const sum = array.reduce((total, value, currentIndex, arr) => total + value, 0);
console.log(sum);


const arrNew = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumNew = arrNew.reduce((total, value, index, arrNew) => { return total + value; }, 0);

console.log(sumNew)

*/

//** using reduce to calculate the price */

const array = [
    { item: 'imac', price: 1000 }, { item: 'ipad', price: 500 }
];


const sum = array.reduce((total, item) => { return total + item.price; }, 0);
console.log(sum);

