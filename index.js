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
            type: "input",
            name: "description",
            message: "Please give a description of your project?",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. ",
        },
        {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any, with links to their GitHub profiles.",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of licnese would you like to have?",
            choices: ['MIT', 'GNU GPLv3', 'No License']
        },
        {
            type: "input",
            name: "contrubuting",
            message: "What are your guidelines for contribiting to this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Have you tested your project?",
        },
    ]);
};


function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, "utf8",(err) => {
        if (err) throw err;
    });
};

async function init() {
    
    const answers = await questions();
    console.log(answers)
    generateMarkdown(answers);
    writeToFile("readme.md", generateMarkdown(answers));
}

init();

