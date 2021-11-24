// Nullish Values
// null, undefined, and void
const cart = {};
cart.fruits.push({ name: "kumkuat", qty: 1 });
//   ^?
cart.fruits.push({ name: "kumkuat", qty: 1 });
// Definite Assignment operator
// !: tells TypeScript that a value will be defined, so Typescript can assume this will have a value.
class ThingWithAsyncSetup {
    constructor() {
        this.setupPromise = new Promise((resolve) => {
            this.isSetup = false;
            return this.doSetup();
        }).then(() => {
            this.isSetup = true;
        });
    }
    async doSetup() {
        // some async stuff
    }
}
