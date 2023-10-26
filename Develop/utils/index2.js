const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMakrdown2.js')

const questions = [
  {
    type: 'input',
    message: 'Enter project title: ',
    name: 'title'
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
  inquirer.createPromptModule(questions).then(answers => {
    let info = generateMarkdown(answers);
    writeToFile("./new_readme/README.md", info)
    console.log('Your README file has been made. It can be found in the "new_readme" folder and is labeled "README.md".')
  })

}
