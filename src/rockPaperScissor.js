const inquirer = require("inquirer");

module.exports = class rockPaperScissor = () => {
    constructor() {
        this.prompt = inquirer.createPromptModule();
        this.choices = ["Rock", "Paper", "Scissor"];
    }
};

