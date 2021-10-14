// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)
  <br />

  ## Description
  ${data.description}
  
 ------------------
 ------------------

 ## Table of Contents 🔎
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credit](#credit)
 - [Tests](#test)
 - [License](#license)
 - [Github](#github)
 - [Email](#email)

 ------------------
 ------------------

 ## Installation
  ${data.installation}
  
  ------------------

 ## Usage
  ${data.usage}

  ------------------

 ## Credit
  ${data.credit}

  ------------------

 ## Tests
  ${data.test}

  ------------------
  
 ## License
  // ${data.license}
  <br>
  ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet) 
  <br>
  This application is protected by the ${data.license} license.

  ------------------

 ## Questions?
 Feel free to reach out!
 <br>
 [GitHub](https://github.com/${data.github})
 <br>
 [Email Me](mailto:${data.email})

  ------------------
`;
}

module.exports = generateMarkdown;
