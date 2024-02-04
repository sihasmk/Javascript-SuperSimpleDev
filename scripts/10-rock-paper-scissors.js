/* use of default operator */
let score = JSON.parse(localStorage.getItem("score")) || {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };

  updateScoreElem();

  function playGame(playerMove) {
    pc_choice = getCompChoice();
    let result = "";

    if (playerMove === "scissors") {
      if (pc_choice === "rock") {
        result = "You Lose!";
      } else if (pc_choice === "paper") {
        result = "You Win!";
      } else {
        result = "Tie!";
      }
    } else if (playerMove === "paper") {
      if (pc_choice === "rock") {
        result = "You Win!";
      } else if (pc_choice === "paper") {
        result = "Tie!";
      } else {
        result = "You Lose!";
      }
    } else {
      if (pc_choice === "rock") {
        result = "Tie!";
      } else if (pc_choice === "paper") {
        result = "You Lose!";
      } else {
        result = "You Win!";
      }
    }

    if (result === "You Win!") {
      score.Wins++;
    } else if (result === "You Lose!") {
      score.Losses++;
    } else {
      score.Ties++;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElem();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You <img class="emoji"  src="/emojis-RPS/${playerMove}-emoji.png"> <img class="emoji" src="/emojis-RPS/${pc_choice}-emoji.png"> Computer`;
  }

  function updateScoreElem() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  }

  function getCompChoice() {
    num = Math.random() * 10000;

    /* num<10000/3=>rock */
    /* num<20000/3=>paper */
    /* else, scissors */

    if (num < 10000 / 3) {
      return "rock";
    } else if (num < 20000 / 3) {
      return "paper";
    }
    return "scissors";
  }