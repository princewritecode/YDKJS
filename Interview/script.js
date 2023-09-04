//finding maximum number in array

const arr = [22, 44, 33, 55, 966, 76, 6, 789];
let max = arr[0];

for (let i of arr) {
    console.log(i);
    if (i > max) {
        max = i;
    }
}
console.log(max);