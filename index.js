// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What was your motivation for this project?',
    name: 'motivation',
  },
  {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'build',
  },
  {
    type: 'input',
    message: 'What problem does your project solve?',
    name: 'problem',
  },
  {
    type: 'input',
    message: 'What did you learn?',
    name: 'learned',
  },
  {
    type: 'input',
    message: 'What do you plan to implement in the future?',
    name: 'implement',
  },
  {
    type: 'input',
    message: 'If deployed, please provide a link to the live site.',
    name: 'deploy',
  },
  {
    type: 'editor',
    message: 'In your default editor, please describe the steps required to install your project.',
    name: 'installation',
  },
  {
    type: 'editor',
    message: 'In your default editor, please provide instructions for the usage of your project.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'If you created an application or package and would like other developers to contribute it, please include guidelines for how to do so.',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'If you have written any tests for your application please provide examples of how to run them here.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'If you have written any tests for your application please provide examples of how to run them here.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'If you have written any tests for your application please provide examples of how to run them here.',
    name: 'tests',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const myMarkdown = generateMarkdown(data)
  fs.writeFile(fileName, myMarkdown, (err) => {
    err ? console.error(err) : console.log('Your README.md file has been successfully created in the file explorer menu.')
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
