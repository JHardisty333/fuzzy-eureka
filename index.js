// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const promptUser = () => {
    
return inquirer.prompt(questions)
}

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the scope of your project? Enter a description or introduction to what you are doing. '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does the user install your application? List out the steps for any dependencies that need to be installed.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Do you want to include any collaborators or third party resources?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Did you test or demo the project? Add any helpful information.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Are there any licenses you would like to use?',
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'
        ]
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?' 
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./utils/generatedReadME.md', data, err => {
        if (err) {
            return err
        }

        console.log('file was created')
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser ()
    .then(data => {
            let readMeData = generateMarkdown(data)
            writeToFile (readMeData)
    })
}

// Function call to initialize app
init();
