let cards = document.getElementById("cards");
let firstCard = randomNumber();
let secondCard = randomNumber();
let card = [firstCard, secondCard];
let sum = firstCard + secondCard;
let sumEl = document.getElementById("sum");
let message = document.getElementById("message");
let isAlive = false;

function startGame() {
  if (isAlive) {
    alert("you already started");
  } else {
    isAlive = true;
    renderGame();
  }
}

function renderGame() {
  cards.textContent = "Cards: ";
  sumEl.textContent = "Sum: " + sum;

  for (let i = 0; i < card.length; i++) {
    cards.textContent += card[i] + " ";
  }

  //for (let i = 0; i < card.length; i++) {
  // addition += card[i];
  //}
  //sum.textContent += addition;

  if (sum < 21) {
    message.textContent = "Would you like a new card?";
  } else if (sum === 21) {
    message.textContent = "Blackjack!";
  } else {
    isAlive = false;
    message.textContent = "You've bust out!";
  }
}

function newCard() {
  let newCard = randomNumber();
  card.push(newCard);
  sum += newCard;

  if (isAlive) {
    renderGame();
  } else {
    alert("you lost");
  }
}

function randomNumber() {
  let random = Math.floor(Math.random() * 13);

  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else if (random === 0) {
    return 2;
  } else {
    return random;
  }
}
