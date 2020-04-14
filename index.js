const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([{
            type: "input",
            name: "gitHub",
            message: "What is your GitHub Url?",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        // {
        //     type: "input",
        //     name: "",
        //     message: "",
        // },
        // {
        //     type: "input",
        //     name: "",
        //     message: "",
        // },
    ]);
};


function writeToFile(fileName, data) {}

function init() {

}

init();
questions();
