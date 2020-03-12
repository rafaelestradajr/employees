const questions = {
    menuQuestions: [
        {
            type: "input",
            name: "first_name",
            message: "Enter the employees first name:"
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter the employees last name:"
        },
        {
            type: "list",
            name: "role",
            message: "Enter the employees role:",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ],

    managerQuestions: [
        {
            type: "input",
            name: "office",
            message: "Enter the employees office number:"
        }
    ],

    internQuestions: [
        {
            type: "input",
            name: "school",
            message: "Enter the employees school:"
        }
    ],

    engineerQuestions: [
        {
            type: "input",
            name: "github",
            message: "Enter the employees github account:"
        }
    ],

    again: [
        {
            type: "confirm",
            name: "again",
            message: "Would you like to add another employee?",
            default: true
        }
    ]
};

module.exports = questions;