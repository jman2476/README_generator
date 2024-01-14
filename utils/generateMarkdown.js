// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    case "Apache License 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    case "Creative Commons License":
      return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)'
    case "BSD 3-Clause License":
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    case "Mozilla Public License 2.0":
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    case "The Unlicense":
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
    case "GNU Lesser General Public License (LGPL)":
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)'
    case "Eclipse Public License":
      return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)'
    case "GNU Affero General Public License (AGPL)":
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)'
    case "GNU General Public License v3.0":
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case "GNU General Public License v2.0":
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'
    case "GNU General Public License v1.0":
      return '![License: GPL v1](https://img.shields.io/badge/License-GPL%20v1-blue.svg)'
    default: return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement to return link describing the desired license
  switch (license) {
    case "MIT License":
      return "https://en.wikipedia.org/wiki/MIT_License"
    case "Apache License 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0"
    case "Creative Commons License":
      return 'https://creativecommons.org/share-your-work/cclicenses/'
    case "BSD 3-Clause License":
      return 'https://en.wikipedia.org/wiki/BSD_licenses'
    case "Mozilla Public License 2.0":
      return 'https://www.mozilla.org/en-US/MPL/2.0/FAQ/'
    case "The Unlicense":
      return 'https://unlicense.org/'
    case "GNU Lesser General Public License (LGPL)":
      return 'https://www.gnu.org/licenses/lgpl-3.0.en.html'
    case "Eclipse Public License":
      return 'https://www.eclipse.org/legal/epl-2.0/'
    case "GNU Affero General Public License (AGPL)":
      return 'https://www.gnu.org/licenses/agpl-3.0.en.html'
    case "GNU General Public License v3.0":
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    case "GNU General Public License v2.0":
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    case "GNU General Public License v1.0":
      return 'https://www.gnu.org/licenses/old-licenses/gpl-1.0.en.html'
    default: return '';
  }
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license)
  const licenseLink = renderLicenseLink(license)

  const licenseText = `This project use the ${license}. To learn more about this license, visit ${licenseLink}`

  return [licenseBadge, licenseText]
}

// function to generate markdown for README
function generateMarkdown(data) {
  const licensing = renderLicenseSection(data.license)

  return `# ${data.title}

  ${licensing[0]}
  ## Description
  ${data.description}
  
  
  ## Table of Contents
  
  - [License](#license)
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
  - [Testing](#tests)
  - [Credits](#credits)
  - [How to contribute](#contributions)
  - [Badges](#badges)
  - [Questions](#questions)
  
  <a id='license'></a>
  ## License
  ${licensing[1]}

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
 
  <a id='questions'></a>
  ## Questions

  If you have any questions, feel free to contact me at ${data.email},
  or visit my GitHub at https://github.com/${data.github}

  <a id='badges'></a>
  ## Badges
  
  
`;
}

module.exports = generateMarkdown;
