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

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
function multiplyNumeric(obj) {
    for (let prop in obj){
        if (isNumeric(obj[prop])){
            obj[prop] *= 2;
        }
    }
}
