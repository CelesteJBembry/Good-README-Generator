// const questions = [
// ];
// function writeToFile(fileName, data) {
// }
// function init() {
// }
// init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "list",
      message: "Please choose a license version",
      name: "license",
      choices: ['2018','2019', '2020'],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "githubName"
    },
    {
      type: "input",
      message: "What is your GitHub email?",
      name: "githubEmail"
    },
    {
      type: "confirm", 
      message: "Do you have a github picture? (Y/N)",
      name: "picQuestion"
    },
  ])
}
function generateFile(response) {
console.log(response)
return `

## Unit 09 Node.js and ES6+ Homework: Good README Generator

##Description: 
When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.
GIVEN the developer has a GitHub profile and a repository
WHEN prompted for the developer's GitHub username and repo specific information
THEN a README for the repo is generated

##Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  * User GitHub profile picture
  * User GitHub email

##Installation

*Install and Configure Git.
*Clone a GitHub Repository.
*Create a GitHub Account and Fork the Test Repo.
*Push to the Forked Repo.
*Create a Pull Request Against the Original, Previously Cloned Repo.

##Usage
Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command: node index.js
The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

##License
Copyright (c) ${response.license} Celeste J Bembry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

##Badges
Check out the badges hosted by [shields.io](https://shields.io/).
https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>

##Contributing
The [Contributor Covenant](https://www.contributor-covenant.org/) 
[![Contributor Covenant](https://img.shields.io/badge/Contributor%

##Tests
Go the extra mile and write tests for your application. 
Then provide examples on how to run them.

##Questions
* User GitHub name:  ${response.githubName}
* User GitHub email: ${response.githubEmail}
* User GitHub profile picture ${response.picQuestion}

`;
}
promptUser()
  .then(function(response) {
    const md = generateFile(response);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Read Me successfully written");
  })
  .catch(function(err) {
    console.log(err);
  });