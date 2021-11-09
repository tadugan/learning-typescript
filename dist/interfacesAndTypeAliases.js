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
function feed(animal) {
    animal.eat;
    animal.isAlive;
}
const val = [3, 4, [5, 6, [7], 59], 221];
if (typeof val !== "number") {
    val.push(41);
}
