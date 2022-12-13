const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

const faceDownCards = ["left", "middle", "right"];
const aces = ["AoS", "AoD", "AoC", "AoH"];
const jokers = ["Joker1", "Joker2", "Joker3"];

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

  const userGuessImg = userGuess.getElementsByTagName("img")[0];
  const randomAce = getRandomItem(aces);
  const randomJoker = getRandomItem(jokers);

  if (userGuess.classList.contains(correctCard)) {
    userGuessImg.src = `./assets/requiem${randomAce}.jpeg`;
  } else {
    userGuessImg.src = `./assets/requiem${randomJoker}.jpeg`;
  }

  disablePointer();
  setTimeout(shuffleCards, 2000);
  newHand();
}

function shuffleCards() {
  resetCards();

  cards[0].style.animation = "shuffleCard1 1s alternate ease-in-out 3";
  cards[1].style.animation = "shuffleCard2 1s alternate ease-in-out 3";
  cards[2].style.animation = "shuffleCard3 1s alternate ease-in-out 3";
}

function newHand() {
  cards.forEach((card) => {
    card.style.animation = "";
  });
  enablePointer();
  clearTimeout(shuffleCards);
}

function resetCards() {
  cards.forEach((card) => {
    card.getElementsByTagName("img")[0].src = "./assets/requiemBack.jpeg";
  });
}

function disablePointer() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.add("disablePointer");
}

function enablePointer() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.remove("disablePointer");
}
