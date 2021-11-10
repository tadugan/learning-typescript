// Callable types & Function overloads
// Interfaces or type aliases that describe functions
// something that can be invoked or something that can constructed using the New keyword
const add = (a, b) => a + b;
const subtract = (x, y) => x - y;
// Sometimes we don't return anything from type annotations
function printFormattedJSON(obj) {
    console.log(JSON.stringify(obj, null, "   "));
}
const z = printFormattedJSON(["hello", "world"]);
// void means the return value of this function should be ignore
// void should only appear as a function return type
// undefined means it cannot return anything
// @errors: 2322
function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
const values = [];
// @ts-expect-error
invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(4));
let MyDateConstructor = Date;
const d = new MyDateConstructor();
// Function Overloads
// https://www.typescript-training.com/course/fundamentals-v3/09-functions/
// Best Practices for functions
// Explicitly define return types
// So that error appear close to where you need to fix them
