INSERT INTO department(name)
    VALUES  ("Engineering"),
            ("Finance"),
            ("Legal"),
            ("Sales");

INSERT INTO roles(title, salary, department_id)
    VALUES  ("Sales Lead", 80000, 4),
            ("Salesperson", 60000, 4),
            ("Lead Engineer", 120000, 1),
            ("Account Manager", 75000, 2),
            ("Accountant", 140000, 3),
            ("Legal Team Lead", 200000, 3),
            ("Lawyer", 180000, 3);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
    VALUES  ("Angelica", "Duarte", 1, ),
            ("Armando", "Nava", 2, 1),
            ("Jorge", "Jimenez", 2, 1),
            ("Izick", "Jimenez", 3, 4),
            ("Gloria", "Andrade", 4, 2),
            ("Briyana", "Jimenez", 5, 5),
            ("David", "Andrade", 5, 5),
            ("George", "Jimenez", 6, 7),
            ("Amber", "Cruz", 7, 8),
            ("Brian", "Duarte", 7, 8);