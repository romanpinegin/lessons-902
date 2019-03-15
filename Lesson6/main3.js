"use strict";

let salaries = {
    'Вася' : 100,
    'Петя' : 300,
    'Даша' : 250,
}
let maxSalary = -Infinity;
let maxName;

for (let name in salaries) {
    if (salaries[name] > maxSalary) {
        maxSalary = salaries[name];
        maxName = name;
    }
}

if (!maxName) {
    alert('Нет сотрудников');
} else {
    alert(maxName)
}


