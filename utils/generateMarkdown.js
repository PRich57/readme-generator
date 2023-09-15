// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/MIT_License-blue)';
  } else if (data.license === 'BSD') {
    return '![License: BSD 3-CLause](https://img.shields.io/badge/BSD_License-green)';
  } else if (data.license === 'GNU') {
    return '![License: GNU GPL v3](https://img.shields.io/badge/GNU_License-purple)';
  } else {
    return '![404 Badge](https://img.shields.io/badge/No_License_Chosen-red)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return '![MIT Link](https://opensource.org/license/mit/)';
  } else if (data.license === 'BSD') {
    return '![BSD Link](https://opensource.org/license/bsd-3-clause/)';
  } else if (data.license === 'GNU') {
    return '![GNU Link](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'MIT') {
    return `This project is covered under the MIT License
    
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (data.license === 'BSD') {
    return `This project is covered under the BSD 3-Clause License
    
    BSD licenses are a low restriction type of license for open source software that does not put requirements on redistribution. As a low restriction and requirement license type, Berkeley Source Distribution (BSD) licenses are used for the distribution of many freeware, shareware and open source software`;
  } else if (data.license === 'GNU') {
    return `This project is covered under the GNU GPL v3 License
    
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  } else {
    return "No license has been selected for this project.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

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

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

## Contributing

  ${data.contribution}
  
## Tests

  ${data.tests}

## Questions

  GitHub: [${data.github}](https://github.com/${data.github})

  Email: ${data.email}

  Please direct all additional questions regarding this application to my email address provided above.

  `;
};

module.exports = generateMarkdown;
