class Suit {
  constructor(choices) {
    this.ROCK = "ROCK";
    this.SCISSORS = "SCISSORS";
    this.PAPER = "PAPER";
    this.WIN = "WIN";
    this.LOSE = "LOSE";
    this.DRAW = "DRAW";
    this.choices = choices;
  }

  setDisabledClass() {
    this.choices.forEach(ch => ch.parentElement.classList.add("disabled"));
  }

  setRemoveDisabledClass() {
    this.choices.forEach(ch => ch.parentElement.classList.remove("disabled"));
  }

  get computerChoice() {
    const comp = Math.random();
    if (comp < 0.34) return this.ROCK;
    if (comp >= 0.34 && comp < 0.67) return this.SCISSORS;
    return this.PAPER;
  }

  shuffleImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  setRandomImages(imgComp, imgPlayer) {
    const images = [this.ROCK, this.SCISSORS, this.PAPER];
    const compImages = this.shuffleImages(images);
    let i = 0;
    const dateStart = new Date().getTime();
    setInterval(function () {
      if (new Date().getTime() - dateStart > 1000) {
        clearInterval;
        return;
      }
      imgComp.setAttribute("src", "img/" + compImages[i++] + ".png");
      if (i == compImages.length) i = 0;
    }, 100);
  }

  getResult(computer, player) {
    if (player == computer) return this.DRAW;
    if (player == this.ROCK)
      return computer == this.SCISSORS ? this.WIN : this.LOSE;
    if (player == this.SCISSORS)
      return computer == this.ROCK ? this.LOSE : this.WIN;
    if (player == this.SCISSORS)
      return computer == this.PAPER ? this.WIN : this.LOSE;
    if (player == this.PAPER)
      return computer == this.SCISSORS ? this.LOSE : this.WIN;
  }
}

const computerScore = document.querySelector(".score-value-comp");
const playerScore = document.querySelector(".score-value-user");
const choices = document.querySelectorAll(".player-options .player-option img");
const playerImg = document.querySelector(".result-user img");
const computerImg = document.querySelector(".result-computer img");
const resultStart = document.querySelector(".result-start");
const resultChoices = document.querySelector(".result-end");
const resultMessage = document.querySelector(".result-textbox h1");

const suitClass = new Suit(choices);

[...choices].map(choice => {
  choice.addEventListener("click", e => {
    suitClass.setDisabledClass();
    resultStart.classList.add("hide");
    resultChoices.classList.remove("hide");

    // const player
    const compChoice = suitClass.computerChoice;
    const playerChoice = e.target.id;
    const result = suitClass.getResult(compChoice, playerChoice);

    playerImg.setAttribute("src", "img/" + playerChoice + ".png");
    suitClass.setRandomImages(computerImg);

    setTimeout(() => {
      let info = "";

      computerImg.setAttribute("src", "img/" + compChoice + ".png");

      switch (result) {
        case "WIN":
          playerScore.textContent = +playerScore.textContent + 1;
          resultMessage.className = "win";
          info = `You Win`;
          break;
        case "LOSE":
          computerScore.textContent = +computerScore.textContent + 1;
          resultMessage.className = "lose";
          info = `You Lose`;
          break;
        case "DRAW":
          resultMessage.className = "draw";
          info = `Draw`;
          break;
        default:
          info = `Something went wrong`;
          break;
      }

      resultMessage.parentElement.classList.remove("hide");
      resultMessage.innerHTML = info;

      suitClass.setRemoveDisabledClass();
    }, 1000);
  });
});
