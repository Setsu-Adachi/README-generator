const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Discribe about the project?",

    },
    {
        type: "input",
        name: "tableofcontents",
        message: "List up the table of contents",

    },
    {
        type: "input",
        name: "installation",
        message: "How do you install?",

    },
    {
        type: "input",
        name: "usage",
        message: "How to use it?",

    },
    {
        type: "input",
        name: "license",
        message: "What License do you use?",

    },
    {
        type: "input",
        name: "contributing",
        message: "Do you have any contributor?",

    },
    {
        type: "input",
        name: "tests",
        message: "How to test?",

    },
    {
        type: "input",
        name: "github",
        message: "What is your github user profile?",

    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            console.log(generateMarkdown(answers));
            // run generate markdown and put it a variable
const markdown = generateMarkdown(answers);
            // run writeToFile function
  fs.writeFile("./readme.md", markdown, (error) => {console.log(error);});  
        })
}

// function call to initialize program
init();
