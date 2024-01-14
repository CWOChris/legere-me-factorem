// TODO: Include packages needed for this application
const node = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the installation instructions?",
    "What are the usage instructions?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "What license would you like to use?",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },
        {
            type: "input",
            name: "installation",
            message: questions[2]
        },
        {
            type: "input",
            name: "usage",
            message: questions[3]
        },
        {
            type: "input",
            name: "contribution",
            message: questions[4]
        },
        {
            type: "input",
            name: "test",
            message: questions[5]
        },
        {
            type: "list",
            name: "license",
            message: questions[6],
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "github",
            message: questions[7]
        },
        {
            type: "input",
            name: "email",
            message: questions[8]
        }
    ])
       .then((data) => {
            console.log(data);
            const fileName = `${data.title}.md`;
            const markdown = generateMarkdown(data);
            writeToFile(fileName, markdown);
            console.log("Successfully wrote to " + fileName);
            console.log(markdown);
       });
}

// Function call to initialize app
init();