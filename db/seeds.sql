INSERT INTO department (name)
VALUES ("Marketing"),
       ("Sales"),
       ("Accounting"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
       ("Marketing Manager", 100000, 1),
       ("Marketing Coordinator", 70000, 1),
       ("Marketing Intern", 35000, 1);
VALUES ("Sales Manager", 150000, 2),
       ("Sales Rep", 90000, 2),
       ("Sales Intern", 40000, 2),
       ("Accounting Manager", 115000, 3),
       ("Accounting Rep", 95000, 3),
       ("Accounting Intern" 55000, 3),
       ("HR Manager", 80000, 3),
       ("HR Rep", 58000, 3),
       ("HR Intern", 38000, 3),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Angelica ", "Duarte", 1, NULL),
       ("Armando", "Nava", 2, 1),
       ("Jorge", "Jimenez", 3, 1),
       ("Izick", "Jimenez", 4, NULL),
       ("Gloria", "Andrade", 5, 4),
       ("Briyana", "Jimenez", 6, 4),
       ("David", "Andrade", 7, NULL),
       ("Amber ", "Cruz", 8, 7),
       ("George", "Jimenez", 9, 7),
       ("Robert", "Guerra", 10, NULL),
       ("Alberto", "Negrete", 11, 10),
       ("Julissa", "Esparza", 12, 10);