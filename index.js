// TODO: Include packages needed for this application
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
// Above are the packeges i will need. I used require to gain them.
// TODO: Create an array of questions for user input

const validateEmail = (email) => {
  // Regular expression pattern for email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your document title:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter your document title!";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "description",
    message: "Enter a description for your document:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter a description of your!";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "installation",
    message: "Enter a description of how to install your application:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter how to install your application!";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter how to use your application:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter how to use your application!";
      }
      return true;
    },
  },

  {
    type: "list",
    name: "license",
    message: "Please choose a license:",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 1.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "No License",
    ],
  },

  {
    type: "input",
    name: "contribution",
    message: "Please enter how to add contributions:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter how to add contributions!";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "test",
    message: "Please enter how to test your application:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter how to test your application!";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "gitHub",
    message: "Enter your GitHub username:",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter a valid git hub username!";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: function (input) {
      if (!validateEmail(input)) {
        return "Please enter a valid email address.";
      }
      return true;
    },
  },

  // Above are questions that will be used with the inquirer method to prompt the user for data.
  // The license question has to be a list that asks you to choose one of the license provided.
  // I validate the email with a regular expression using validate email function.
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
