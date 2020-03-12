const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./questions");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeList = [];
// Functions
function getManager(answers) {
    inquirer
        .prompt(questions.menuQuestions.concat(managerQuestions))
        .then(({ name, id, email, officeNumber }) => {
            let manager = new Manager(name, id, email, officeNumber);
            employeeList.push(manager);
            getEmployee();
        })

}
function init() {
    console.log('\nWelcome! Time to build your team:\n')
    inquirer
        .prompt(questions.menuQuestions)
        .then((answers) => {
            console.log(answers)
            switch (answers.role) {
                case 'Engineer':
                    getEngineer(answers);
                    break;
                case 'Manager':
                    getManager(answers);
                    break;
                case 'Intern':
                    getIntern(answers);
                    break;
                case 'Exit':
                    console.log(render(employeeList));
                    break;
            }
        })
}

function getEngineer(answers) {
    inquirer
        .prompt(questions.engineerQuestions)
        .then(github => {
            let engineer = new Engineer(answers.first_name, answers.first_name, answers.first_name, github.github);
            employeeList.push(engineer);
            again();
        })
}

function getIntern(answers) {
    inquirer
        .prompt(employeeQuestions.concat(internQuestions))
        .then(({ name, id, email, school }) => {
            let intern = new Intern(name, id, email, school);
            employeeList.push(intern)
            getEmployee();
        })
}
function again() {

    console.log(render(employeeList));
    // init();
}

// Write code to use inquirer to gather information about the development team members,









init()
