const inquirer = require("inquirer");

module.exports = class rockPaperScissor {
  constructor() {
    this.prompt = inquirer.createPromptModule();
    this.choices = ["Rock", "Paper", "Scissor"];
  }

  async start() {
    let answer = await this.prompt({
      type: "confirm",
      name: "startGame",
      message: "Do you want to play Rock Paper Scissor?",
    });
    if (answer.startGame !== true) {
      console.log("Thank you for playing");
      process.exit(0);
    }
    this.chooseGameOption();
  }

  async chooseGameOption() {
    let answer = await this.prompt({
      type: "list",
      name: "gameOption",
      message: "Choose an option",
      choices: [
        { name: "Player vs Computer", value: "PlayerVsComputer" },
        { name: "Computer vs Computer", value: "computerVsComputer" },
      ],
    });
    this.compete(answer.gameOption);
  }

  async compete(gameOption) {
    let player1Label = "";
    let player1Move = "";
    let computerMove = this.randomMove();
    if (gameOption === "PlayerVsComputer") {
      player1Move = await this.getUserMove();
      player1Label = "You";
    } else if (gameOption === "computerVsComputer") {
      player1Move = this.randomMove();
      player1Label = "Computer 1";
    }

    if (player1Move === "") {
      console.log("Something went wrong. Please try again");
      process.exit(0);
    }

    let winner = this.getWinner(player1Move, computerMove, player1Label);

    this.printResult(player1Label, player1Move, computerMove, winner);
    this.start();
  }

  getWinner(player1Move, computerMove, player1Label) {
    let winner = "";

    try {
      if (player1Move === computerMove) {
        winner = "Draw";
      }

      switch (player1Move) {
        case "Rock":
          if (computerMove === "Paper") {
            winner = "Computer";
          } else {
            winner = player1Label;
          }
          break;
        case "Paper":
          if (computerMove === "Scissor") {
            winner = "Computer";
          } else {
            winner = player1Label;
          }
          break;
        case "Scissor":
          if (computerMove === "Rock") {
            winner = "Computer";
          } else {
            winner = player1Label;
          }
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.");
    }

    return new Promise((resolve) => {
      resolve(winner);
    });
  }

  printResult(winner, player1Label, player1Move, computerMove) {
    console.log(
      `Winner: ${winner}. ${player1Label} chose ${player1Move}. Computer chose ${computerMove}`
    );
  }

  randomMove() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }
};
