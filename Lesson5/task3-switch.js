'use strict';

/*
Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
 */

let login = prompt ('Кто пришёл?');
let password;

switch (login) {
    case 'Админ':
        password = prompt('Введите пароль');
        switch (password) {
            case 'Чёрный Властелин':
                alert('Добро пожаловать!');
                break;
            case null:
                alert('Вход отменён');
                break;
            default:
                alert('Пароль неверен');
        }
        break;
    case null:
        alert('Вход отменён');
        break;
    default:
        alert('Я вас не знаю');
}




