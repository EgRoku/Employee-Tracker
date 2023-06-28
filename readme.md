# Employee Tracker

## **_Table of contents_**
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Video Submission](#video-submission)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Links](#links)

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Video Submission



## Dependencies

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. Use npm install to install required packages. 

## Installation

Make sure to have mysql server downloaded and running.

Since Node.js applications don't have a front end, clone or download the repository to your own local machine and run it from your command line.

Then, make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init in your command line.

Run npm i or npm install in order to download all the dependencies.

Here are the MySQL instructions to create your tables:

Enter mysql -u root -p in the CLI to enter mysql.
Enter your mysql password (it is the same as the one in the db/connection.js file).
Tell your database to use your seeds and schema files by entering source db/seeds.sql; and enter, then type source db/schema.sql; and enter.
Exit MySQL by entering quit;.
You are done!
Run node index.js in your terminal to launch the application.

## Links

https://github.com/EgRoku/Employee-Tracker


