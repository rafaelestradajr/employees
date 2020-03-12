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







// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including template divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

init()