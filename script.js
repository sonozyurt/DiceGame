var winText = document.querySelector(".container h1");
var firstPlayerDiceImage = document.querySelector(".img1");
var secondPlayerDiceImage = document.querySelector(".img2");

function numberGenerator() {
  var firtNumber = Math.floor(Math.random() * 6) + 1;
  var secondNumber = Math.floor(Math.random() * 6) + 1;
  firstPlayerDiceImage.setAttribute("src", `images/dice${firtNumber}.png`);
  secondPlayerDiceImage.setAttribute("src", `images/dice${secondNumber}.png`);

  if (firtNumber < secondNumber) {
    winText.innerHTML = "Second Player Wins.";
  } else {
    winText.innerHTML = "First Player Wins.";
  }
}

numberGenerator();
