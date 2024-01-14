const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'How would you describe your project?',
        name: 'description'
    },
    { 
        message: 'Installation instructions?',
        type: 'editor',
        name: 'installation'
    },
    {
        message: 'Got any features?!',
        type: 'editor',
        name: 'features'
    },
    { 
        message: 'Usage information?',
        type: 'editor',
        name: 'usage'
    },
    {
        type: 'editor',
        message: 'Credits?',
        name: 'credits'
    },
    { 
        message: 'Contribution guidelines?',
        type: 'editor',
        name: "contribution"
    },
    { 
        message: 'Testing instructions?',
        type: 'editor',
        name: 'testing'

    },
    { 
        message: 'License?',
        type: 'list',
        name: 'license',
        choices: ["MIT License",
        "Apache License 2.0",
        "GNU General Public License (GPL)",
        "Creative Commons License",
        "BSD 3-Clause License",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "GNU Lesser General Public License (LGPL)",
        "Eclipse Public License",
        "GNU Affero General Public License (AGPL)",
        "ISC License",
        "GNU General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU General Public License v1.0"
      ],
      default: 1
    },
    { 
        message: 'Github username?',
        type: 'input',
        name: 'github'
    },
    { 
        message: 'Email address?',
        input: 'input',
        name: 'email'
    }];

module.exports = questions;