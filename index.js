// added requirements to packages and exported js.
const fs = require("fs");
const inquirer = require("inquirer");
const {
  renderLicenseBadge,
  renderLicenseLink,
} = require("./utils/generateMarkdown.js");

// created an array of objects using inquirer to prompt the user input
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
        "Provide a short description of your project explaining the what, why, and how.",
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
        "Provide instructions and examples for how to use your project.",
      name: "usage",
    },
    {
        type: "input",
        message:
          "Provide link to your project screenshot.",
        name: "screenshot",
    },
    {
      type: "list",
      message: "Which licence would you like to use for your project?",
      choices: [
        "The MIT License",
        "Mozilla Public License 2.0",
        "Open Database License (ODbL)",
        "The Perl License",
        "None",
      ],
      name: "license",
      default: "None",
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
      message: "Provide your Github profile URL.",
      name: "gitHubUrl",
    },
    {
      type: "input",
      message: "Provide your Email address.",
      name: "email",
    },
  ])

// took the user input data and appended it to the README file.
  .then(function (data) {
    const response = writeToFile(data);
    fs.writeFile("READMEexpl.md", response, (err) =>
      err ? console.error(err) : console.log("Your README file is complete!")
    );
  });

// a function to write the user data to the README file
function writeToFile(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  return `
# ${data.title} ${badge}

## Description\n
${data.description}

${data.tableOfContents ? `## Table of Contents\n` : ""}

${data.tableOfContents ? `- [Installation](#installation)` : ""}

${data.tableOfContents ? `- [Usage](#usage)` : ""}

${data.tableOfContents ? `- [License](#license)` : ""}

${data.tableOfContents ? `- [Contributing](#collaborators)` : ""}

${data.tableOfContents ? `- [Tests](#test)` : ""}

${data.tableOfContents ? `- [Questions](#questions)` : ""}

${data.installation ? `## Installation\n\n${data.installation}\n` : ""}

${data.usage ? `## Usage\n${data.usage}\n` : ""}

${data.screenshot ? `![Screenshot](${data.screenshot})` : ""}

${data.license !== "None" ? `## License\nThis project is covered under ${data.license}. 
follow the link ${link} for more information regarding this license\n` : "" }

${data.collaborators ? `## Collaborators\n${data.collaborators}\n` : ""}

${data.test ? `## Test\n${data.test}\n` : ""}

${data.gitHub ? `## Questions\nRegarding any questions please check out my Github profile [${data.gitHub}](${data.gitHubUrl}).` : "" }

${data.email ? `Or send me an [email](mailto:${data.email}).` : ""}

`;
}
