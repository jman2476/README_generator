// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement to return the desired license link
  switch(license){
    case "MIT License":

    case "Apache License 2.0":

    case "GNU General Public License (GPL)":
        
    case "Creative Commons License":
        
    case "BSD 3-Clause License":
        
    case "Mozilla Public License 2.0":
        
    case "The Unlicense":
        
    case "GNU Lesser General Public License (LGPL)":
        
    case "Eclipse Public License":
        
    case "GNU Affero General Public License (AGPL)":
        
    case "ISC License":
        
    case "GNU General Public License v3.0":
        
    case "GNU General Public License v2.0":
        
    case "GNU General Public License v1.0":
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
  - [Testing](#tests)
  - [Credits](#credits)
  - [How to contribute](#contributions)
  - [License](#license)
  - [Badges](#badges)

  <a id='installation'></a>
  ## Installation
  ${data.installation}
  
  <a id='features'></a>
  ## Features
  ${data.features}

  <a id='usage'></a>
  ## Usage
  ${data.usage}


  <a id='tests'></a>
  ## Tests
  ${data.testing}

  <a id='credits'></a>
  ## Credits
  ${data.credits}
  
  <a id='contributions'></a>
  ## How to Contribute
  ${data.contribution}
 
  <a id='license'></a>
  ## License
  ${data.license}

  <a id='badges'></a>
  ## Badges
  
  
`;
}

module.exports = generateMarkdown;
