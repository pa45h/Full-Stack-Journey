let randomNo = parseInt(Math.random() * 100 + 1);

const guessInput = document.querySelector("#guess_input");
const submit = document.querySelector("#submit");
const guesses = document.querySelector(".guesses");
const remainingAttempts = document.querySelector(".remaining_attemts");
const result = document.querySelector(".result");
const guessHistory = document.querySelector(".guess_history");

const p = document.createElement("p");

let noOfGuesses = 1;
let canPlay = true;

if (canPlay) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(guessInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Enter a Number");
  } else if (guess < 1) {
    displayMessage("Enter number > 1");
  } else if (guess > 100) {
    displayMessage("Enter number < 100");
  } else {
    if (noOfGuesses === 10) {
      displayGuesses(guess);
      displayMessage(`Game Over! The no was : ${randomNo}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess < randomNo) {
    displayMessage("Your Guess is too LOW");
  } else if (guess > randomNo) {
    displayMessage("Your Guess is too HIGH");
  } else {
    displayMessage(`YEE! You Guessed it in ${noOfGuesses} guesses`);
    endGame();
  }
}

function displayGuesses(guess) {
  guessInput.value = "";
  guesses.innerHTML += `${guess}  `;
  noOfGuesses++;
  remainingAttempts.innerHTML = `${10 - noOfGuesses}`;
}

function displayMessage(message) {
  guessInput.value = "";
  result.innerHTML = `<h2 style='margin:0.5rem'>${message}</h2>`;
}

function endGame() {
  guessInput.value = "";
  guessInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  p.style.border = "1px solid black";
  p.style.borderRadius = "1rem";
  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.margin = "1rem";
  p.style.padding = "0.5rem";
  p.style.cursor="pointer";
  p.style.boxShadow = "2px 2px 10px hsl(0deg 0% 0% / 0.25)";
  guessHistory.appendChild(p);
  canPlay = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNo = parseInt(Math.random() * 100 + 1);
    noOfGuesses = 1;
    guesses.innerHTML = "";
    remainingAttempts.innerHTML = `${10 - noOfGuesses}`;
    guessInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    guessHistory.removeChild(p);
    canPlay = true;
  });
}
