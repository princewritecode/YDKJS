const randomValue = Math.floor(Math.random() * 6);
let answer = "yes it's where the value will come";
const prompt = Number(prompt("enter your number"));

switch (randomValue) {
    case 0:
        answer = `it will work`;
        console.log(`the value is 0`);
        break;
    case 1:
        answer = `it won't work as the value is 1`;
        console.log(`value is 1`);
        break;
    case 2:
        answer = ` it will work as number is even 2`;
        console.log(`the value is 2`);
        break;
    case 3:
        answer = `nope value is 3 odd`;
        console.log(`the value is 3`);
        break;
    case 4:
        answer = `yes value is even`;
        console.log(`the value is 4`);
        break;
    case 5:
        answer = `nope value is odd`;
        console.log(`the value is 5`);
        break;
}