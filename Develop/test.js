var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input", 
      message: "What is your name?",
      name: "name"
    },
    {
      type: "confirm", 
      message: "Are you excited to learn about README documentation? (Y/N)",
      name: "name"
      },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "name"
    },
    {
      type: "list",
      message: "Please choose a license version",
      name: "license",
      choices: ['1.0','1.1', '1.2'],
    }
  ])
  .then(function(response) {
console.log(response)

    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });
