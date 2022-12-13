const cards = document.querySelectorAll(".card");

const correctCards = ["left", "middle", "right"];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const correctCard = getRandomItem(correctCards);
    handleGuess(card, correctCard);
  });
});

function getRandomItem(arr) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

function handleGuess(userGuess, correctCard) {
  console.log("userGuess", userGuess);
  console.log("correctCard", correctCard);

  if (userGuess.classList.contains(correctCard)) {
    console.log("correct!");
  } else {
    console.log("wrong");
  }
}
