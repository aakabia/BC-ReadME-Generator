// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    case "Apache License 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;

    case "GNU General Public License v3.0":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;

    case "MIT License":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
      break;

    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;

    case "Boost Software License 1.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
      break;

    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
      break;

    case "Eclipse Public License 1.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
      break;

    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
      break;

    case "GNU General Public License v2.0":
      licenseBadge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
      break;

    case "GNU Lesser General Public License v3.0":
      licenseBadge =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
      break;

    case "Mozilla Public License 2.0":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;

    case "The Unlicense":
      licenseBadge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;

    case "No License":
      licenseBadge = "";
      break;

    default:
      licenseBadge = "";
  }
  // Above, I used a switch to pick the correct license badge type for read me.
  return licenseBadge;
  // Above, I returned licence becuase it will be used to generate the proper licence.
}

//console.log(renderLicenseBadge("MIT License"));

// Above I console log the results to make sure the function worked.

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "Apache License 2.0":
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;

    case "GNU General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case "MIT License":
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseLink = "(https://opensource.org/licenses/BSD-2-Clause)";
      break;

    case 'BSD 3-Clause "New" or "Revised" License':
      license = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case "Boost Software License 1.0":
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      break;

    case "Eclipse Public License 1.0":
      licenseLink = "(https://opensource.org/licenses/EPL-1.0)";
      break;

    case "GNU Affero General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/agpl-3.0)";
      break;

    case "GNU General Public License v2.0":
      licenseLink =
        "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) ";
      break;

    case "GNU Lesser General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/lgpl-3.0)";
      break;

    case "Mozilla Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      break;

    case "The Unlicense":
      licenseLink = "(http://unlicense.org/)";
      break;

    case "No License":
      licenseLink = "";
      break;

    default:
      licenseLink = "";
  }
  // Above, I used a switch to pick the correct license link type for read me.
  return licenseLink;
}

//console.log(renderLicenseLink("MIT License"));

// Above I console log the results to make sure the function worked.

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "No License":
      license = "";
      break;

    case "":
      license = "";
      break;

    default:
      license = `  License:   
 
 This project is licensed under the [${license}]${renderLicenseLink(license)} `;
      break;
  }
  // Above, I created a license section for the read me by returning a string with a switch statment.
  // In this switch statment, my default area will be what is creating the license section of the read me.

  return license;
}

//console.log(renderLicenseSection("MIT License"));

// Above, I console.log to see if the function worked properly.

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.license)}

## Table of Content
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Licenses](#Licenses)
  -[Contribution](#Contribution)
  -[Test](#Test)
  -[Questions](#Questions)


## Description
  ${data.description}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Licenses
  ${renderLicenseSection(data.license)}

## Contribution
  ${data.contribution}

## Test
  ${data.test}

## Questions
   Please contact us with questions at:
    Github: [GitHub](https://github.com/${data.gitHub})

    Email: ${data.email}



`;
  // Above I created a markdown of how the reead me should be created and I returned this markdown.
}

module.exports = generateMarkdown;
