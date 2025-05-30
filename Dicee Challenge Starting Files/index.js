// Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomDiceImageSource1 = "images/" + randomDiceImage1;

document.querySelector(".img1").setAttribute("src", randomDiceImageSource1);

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomDiceImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src", randomDiceImageSource2);

// Win
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
}