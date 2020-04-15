const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown")

const questions = () => {
    return inquirer.prompt([{
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of licnese would you like to have?",
            choices: ['MIT', 'Microsoft Public License', "Mozilla Public License 2.0"]
        },
        {
            type: "input",
            name: "description",
            message: "Explain what your app/project does?",
        },
        {
            type: "input",
            name: "",
            message: "Explain what your app/project does?",
        },
        {
            type: "input",
            name: "",
            message: "Explain what your app/project does?",
        },
    ]);
};


function writeToFile(fileName, data) {}

function init() {
    questions();
    // generateMarkdown();
    // writeToFile();
}

init();

