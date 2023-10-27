const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMakrdown.js')

const questions = [
  {
    type: 'input',
    message: 'Enter project title: ',
    name: 'title'
  },
  {
    type: 'list',
    message: 'Select a license:',
    name: 'license',
    choices: [
    {
      name: 'BSD',
      value: {
        link: '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      }
    },
    {
      name: 'MIT',
      value: {
        link: '[The MIT License](https://opensource.org/licenses/MIT)',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      }
    },
    {
      name: 'Perl',
      value: {
        link: '[The Perl License](https://opensource.org/licenses/Artistic-2.0)',
        badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
      }
    },
    {
      name: 'None',
      value: 'none'
    },
  ]
},
  {
    type: 'input',
    message: 'Enter a description of the project:',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter installation instructions ',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Enter usage information: ',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines: ',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter test instructions: ',
    name: 'test'
  },
  {
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your email address? ',
    name: 'email'
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) console.log("Error with writing to file")
  })
}

function init() {
  console.log("Please answer the following questions to generate a beautiful README.md file. Please leave unneeded sections blank")
  inquirer.prompt(questions).then(answers => {
    let info = generateMarkdown(answers);
    writeToFile("./new_readme/README.md", info)
    console.log('Your README file has been made. Please see the "new_readme" in the folder labeled "README.md".')
  })
}

init();