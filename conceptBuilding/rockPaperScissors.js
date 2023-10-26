const rockPaperScissors = ["Rock", "Paper", "Scissors"];
const randomValuePlayer = Math.floor(Math.random() * 3);
const randomValueComputer = Math.floor(Math.random() * 3);
let response = "let's go";
if (randomValueComputer === randomValuePlayer) {
    response = "it's a tie";
}
else if (randomValueComputer > randomValuePlayer) {
    if (randomValueComputer == 2 && randomValuePlayer == 0) {
        response = "player wins";
    }
    else {
        response = 'computer wins';
    }
}
else if (randomValuePlayer > randomValueComputer) {
    if (randomValuePlayer == 2 && randomValueComputer == 0) {
        response = "player wins";
    }
    else {
        response = 'computer wins';
    }
}
console.log(response, randomValueComputer, randomValuePlayer)









