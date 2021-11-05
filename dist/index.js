"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
//== Run the program ==//
;
(async () => {
    console.log(await addNumbers(3, 4));
})();
// Hello world with types
let str = 'Hello World';
// str = 6; // This would error out, in Typescript variables are born with their types
let num = 6;
let num2 = 7;
function logString(s) {
    console.log(s);
}
logString(str);
// logString(num); // This will error out because the function logString requires a parameter that must be a string
function addNums(n, m) {
    return n + m;
}
console.log(addNums(num, num2));
