"use strict";
// Interfaces and Type Aliases
Object.defineProperty(exports, "__esModule", { value: true });
function printContactInfo(info) {
    console.log(info);
    console.log(info.email);
}
const tim = { email: 'tim@email.com', name: 'Tim', color: 'red' };
printContactInfo({ email: 'tim@email.com', name: 'Tim' });
printContactInfo(tim);
function printUserInfo(info) {
    info.name;
}
class Dog {
    bark() {
        return "woof";
    }
    eat(food) {
        console.log('tasty');
    }
}
