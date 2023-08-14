// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
      name: "description",
    },
    {
      type: "confirm",
      message: "Would you like a table of contents?",
      name: "tableOfContents",
      default: true,
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage",
    },
    {
      type: "list",
      message: "Which licence would you like to use for your project?",
      choices: [ "choice A", "choice B", "choice C", "choice D" ],
      name: "license",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "collaborators",
    },
    {
      type: "input",
      message:
        "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
      name: "test",
    },
    {
      type: "input",
      message: "Provide your Github Username",
      name: "gitHub",
    },
    {
      type: "input",
      message: "Provide your Email address",
      name: "email",
    },
  ])
  .then(function (data) {
    const response = writeToFile(data);
    fs.appendFile("README.md", response, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(data) {
    return `
# ${data.title}

## Description\n
${data.description}

${data.tableOfContents ? `## Table of Contents\n\n` : ''}

${data.tableOfContents ? `- [Installation](#installation)` : ''}

${data.tableOfContents ? `- [Usage](#usage)` : ''}

${data.tableOfContents ? `- [License](#license)` : ''}

${data.tableOfContents ? `- [Contributing](#contributing)` : ''}

${data.tableOfContents ? `- [Tests](#tests)` : ''}

${data.tableOfContents ? `- [Questions](#questions)` : ''}

${data.installation ? `## Installation\n\n${data.installation}\n` : ''}

${data.usage ? `## Usage\n\n${data.usage}\n` : ''}

${data.license ? `## License\n\n${data.license}\n` : ''}

${data.collaborators ? `## Collaborators\n\n${data.collaborators}\n` : ''}

${data.test ? `## Test\n\n${data.test}\n` : ''}

${data.gitHub ? `## Questions\n\n${data.gitHub}\n` : ''}

${data.email ? `${data.email}\n` : ''}

`}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
