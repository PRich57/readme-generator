// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

  - ${data.motivation}
  - ${data.build}
  - ${data.problem}
  - ${data.learned}
  - ${data.implement}
  - ${data.deploy}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
  
  ${data.installation}
  
## Usage
  
  ${data.usage}
  
## License

  ${data.license}

## Contributing

  ${data.contribution}
  
## Tests

  ${data.tests}

## Questions

  GitHub: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}

  `;
};

module.exports = generateMarkdown;
