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
};
