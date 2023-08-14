// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "name",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
      name: "input",
    },
    {
      type: "confirm",
      message: "Would you like a table of contents?",
      name: "confirm",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "input",
    },
    {
      type: "confirm",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
      name: "confirm",
    },
    {
      type: "input",
      message: "Which licence would you like to use for your project?",
      name: "input",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "input",
    },
    {
      type: "input",
      message:
        "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
      name: "input",
    },
    {
      type: "input",
      message: "Provide your Github Username",
      name: "input",
    },
    {
      type: "input",
      message: "Provide your Email address",
      name: "input",
    },
  ])
  .then(function (data) {
    console.log(JSON.stringify(data));
    fs.appendFile("README.md", `${JSON.stringify(data)}\n`, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
