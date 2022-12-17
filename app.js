const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

const faceDownCards = ["left", "middle", "right"];
const aces = ["AoS", "AoD", "AoC", "AoH"];
const jokers = ["Joker1", "Joker2", "Joker3"];

const winsEl = document.querySelector(".wins");
const lossesEl = document.querySelector(".losses");
const attemptsEl = document.querySelector(".attempts");

let wins = localStorage.wins ? localStorage.wins : 0;
let attempts = localStorage.attempts ? localStorage.attempts : 0;
let losses = localStorage.attempts
  ? localStorage.attempts - localStorage.wins
  : 0;
updatesWinsLosses();

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const correctCard = getRandomItem(faceDownCards);
    handleGuess(card, correctCard);
  });
});

function getRandomItem(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

function handleGuess(userGuess, correctCard) {
  resetCards();
  disablePointer();

  const userGuessImg = userGuess.getElementsByTagName("img")[0];
  const randomAce = getRandomItem(aces);
  const randomJoker = getRandomItem(jokers);

  if (userGuess.classList.contains(correctCard)) {
    userGuess.style.transform = "";
    userGuessImg.src = `./assets/requiem${randomAce}.jpeg`;
    wins++;
    localStorage.setItem("wins", wins);
    attempts++;
    localStorage.setItem("attempts", attempts);
  } else {
    userGuessImg.src = `./assets/requiem${randomJoker}.jpeg`;
    attempts++;
    localStorage.setItem("attempts", attempts);
  }

  updatesWinsLosses();
  setTimeout(shuffleCards, 2000);
}

function shuffleCards() {
  resetCards();

  cards[0].style.animation = "shuffleCard1 1s alternate ease-in-out 4";
  cards[1].style.animation = "shuffleCard2 1s alternate ease-in-out 4";
  cards[2].style.animation = "shuffleCard3 1s alternate ease-in-out 4";

  clearTimeout(shuffleCards);
  enablePointer();
}

function updatesWinsLosses() {
  winsEl.textContent = wins;
  attemptsEl.textContent = attempts;
  lossesEl.textContent = attempts - wins;
}

function resetCards() {
  cards.forEach((card) => {
    card.getElementsByTagName("img")[0].src = "./assets/requiemBack.jpeg";
    card.style.animation = "";
  });
}

function disablePointer() {
  cards.forEach((card) => {
    card.classList.add("disablePointer");
  });
}

function enablePointer() {
  cards.forEach((card) => {
    card.classList.remove("disablePointer");
  });
}
