function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  const diceImage = document.getElementById("diceImage");
  const resultText = document.getElementById("result");

  diceImage.src = roll + ".svg";
  resultText.textContent = "rolled dice is " + roll;
}