// guessnumber..............

let guessNumber = Math.floor(Math.random() * 5) + 1;

// score...

let score = 3;
let highscore = 0;
// again..........

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 3;

  guessNumber = Math.floor(Math.random() * 5) + 1;
  document.querySelector(".message").textContent = "Start Guessing ! upto 3 Times..";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;

  document.body.style.backgroundColor = "#222";
  //   console.log(reload);
});

//click and value.....................

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //no number selected..........
  if (!guess) {
    document.querySelector(".message").textContent = "No Number 👾";
  }
  // player wins..........
  else if (guess === guessNumber) {
    score++;
    document.querySelector(".score").textContent = score;
    // console.log("Correct Number! 👏");
    document.querySelector(".message").textContent = "Correct Number 👌 Click AGAIN to Replay..";
    document.querySelector(".number").textContent = guessNumber;
    document.body.style.backgroundColor = "#60b347";
    //highscore...........
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // score is too high and low......
  else if (guess !== guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > guessNumber ? "Too High 🐱‍🚀" : "Too Low 🤳";
      score--;
      document.querySelector(".score").textContent = score;
      document.body.style.backgroundColor = "#222";
    } else {
      document.querySelector(".message").textContent = " 😢You lost the Game! Refresh page to play Again..";
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "red";
    }
  }
});



