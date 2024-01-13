// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const genMD = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = require('./utils/questions')


// Function to get user input
function userInput () {
    
}

// TODO: Create a function to write README file
function writeToFile(path, data) { 
    //write data to the file using fs
    fs.writeFile(path, data, (err)=> {
        if (err) return console.log(err)

        // 
        console.log('Check out your new README file!')
    })
}

inquirer.prompt(questions)
    .then((answersObj) => {
        const markdownTxt = genMD(answersObj);

        // create the readme file
        writeToFile('./README.md', markdownTxt)
    })

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
