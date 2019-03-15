"use strict";

let salaries = {
    'Вася' : 100,
    'Петя' : 300,
    'Даша' : 250,
}
let summ = 0;

for (let name in salaries) {
    summ = summ + salaries[name];
}

alert(summ);
