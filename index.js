// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const genMD = require('./utils/generateMarkdown')
// array of questions for user input
const questions = require('./utils/questions')



// function to write README file
function writeToFile(path, data) { 
    //write data to the file using fs
    fs.writeFile(path, data, (err)=> {
        if (err) {return console.log(err)}
        
        // 
        console.log('Check out your new README file!')
    })
}

// Function to get user input
function userInput () {
    // prompts user for each question in the question array
    inquirer.prompt(questions)
        .then((answersObj) => {
            const markdownTxt = genMD(answersObj);
    
            // create the readme file
            writeToFile('./README.md', markdownTxt)
        })
}

// function to initialize app
function init() { 
    userInput();
}

// Function call to initialize app
init();
