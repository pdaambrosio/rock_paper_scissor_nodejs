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
    let result = "";
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
  #TODO: Add logic to determine the winner
  }
};
