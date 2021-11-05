/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
 function timeout(n: number) {
    return new Promise((res) => setTimeout(res, n))
}

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number) {
await timeout(500)
return a + b
}

//== Run the program ==//
;(async () => {
console.log(await addNumbers(3, 4))
})()

// Hello world with types
let str: string = 'Hello World';
// str = 6; // This would error out, in Typescript variables are born with their types

let num: number = 6;

function logString(s: string) {
    console.log(s);
}

logString(str);
// logString(num); // This will error out because the function logString requires a parameter that must be a string

