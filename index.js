const cTable = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // YOUR MySQL USERNAME HERE
        user: 'root',
        // YOUR MySQL PASSWORD HERE
        password: 'glorious',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

const init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select from the following options:",
                name: "initialize",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    "I'm finished"
                ]
            }
        ]).then(ans => {
            // console.log(ans.initialize);
            switch (ans.initialize) {
                case "View all departments": viewDept();
                    break;
                case "View all roles": viewRoles();
                    break;
                case "View all employees": viewEmployees();
                    break;
                case "Add a department": addDept();
                    break;
                case "Add a role": addRole();
                    break;
                case "Add an employee": addEmployee();
                    break;
                case "Update an employee role": updateEmployee();
                    break;
                case "I'm finished":
                    console.log("Thank you!");
                    process.exit();
            }
        }).catch(err => console.error(err));
}

init();

const viewDept = () => {
    // console.log("Working")
    db.query(`SELECT * FROM department`, (err, result) => {
        err ? console.error(err) : console.table(result);
        init();
        console.table(result);
    })
};

const viewRoles = () => {
    db.query(`SELECT * FROM roles`, (err, result) => {
        err ? console.error(err) : console.table(result);
        init();
    })
};

const viewEmployees = () => {
    db.query(`SELECT * FROM employees`, (err, result) => {
        err ? console.error(err) : console.table(result);
        init();
    })
}

const addDept = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the department you'd like to add?",
                name: "addDept"
            }
        ]).then(ans => {
            db.query(`INSERT INTO department(name)
                    VALUES(?)`, ans.addDept, (err, result) => {
                if (err) {
                    console.log(err);
                    //console.table(result);
                } else {
                    db.query(`SELECT * FROM department`, (err, result) => {
                        err ? console.error(err) : console.table(result);
                        init();
                    })
                }
            }
            )
        })
};

const addRole = () => {
    const deptChoices = () => db.promise().query(`SELECT * FROM department`)
        .then((rows) => {
            let arrNames = rows[0].map(obj => obj.name);
            return arrNames
        })
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of the role you'd like to add?",
                name: "roleTitle"
            },
            {
                type: "input",
                message: "What is the salary for this role?",
                name: "roleSalary"
            },
            {
                type: "list",
                message: "Which department is this role in?",
                name: "addDept",
                choices: deptChoices
            }
        ]).then(ans => {
            db.promise().query(`SELECT id FROM department WHERE name = ?`, ans.addDept)
                .then(answer => {
                    let mappedId = answer[0].map(obj => obj.id);
                    // console.log(mappedId[0])
                    return mappedId[0]
                })
                .then((mappedId) => {
                    db.promise().query(`INSERT INTO roles(title, salary, department_id)
                VALUES(?, ?, ?)`, [ans.roleTitle, ans.roleSalary, mappedId]);
                    init()
                })
        })
};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's first name?",
                name: "firstName"
            },
            {
                type: "input",
                message: "What is the employee's last name?",
                name: "lastName"
            },
        ]).then(ans => {
            db.query(`INSERT INTO employees(first_name, last_name)
                    VALUES(?, ?)`, [ans.firstName, ans.lastName], (err, result) => {
                if (err) {
                    console.log(err);
                    //console.table(result);
                } else {
                    db.query(`SELECT * FROM employees`, (err, result) => {
                        err ? console.error(err) : console.table(result);
                        init();
                    })
                }
            }
            )
        })
}
const updateEmployee = () => {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "Please enter the first name of the employee you want update in the database."
            },
            {
                name: "role_id",
                type: "number",
                message: "Please enter the new role number id associated with the employee you want to update in the database. Enter ONLY numbers."
            },
        ]).then(ans => {
            db.query(`UPDATE employee SET roleTitle = ? WHERE firstName = ?`, [ans.firstNname, ans.roleTitle], (err, result) => {
                if (err) {
                    console.log(err);
                    //console.table(result);
                    //init();
                } else {
                    db.query(`SELECT * FROM employees`, (err, result) => {
                        err ? console.error(err) : console.table(result);
                        init();
                    })
                }
            }
            )
        })
}

init();