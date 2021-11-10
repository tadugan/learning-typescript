// Callable types & Function overloads
// Interfaces or type aliases that describe functions
// something that can be invoked or something that can constructed using the New keyword

// Callable Types

// Interface version
interface TwoNumberCalculation {
    (x: number, y: number): number
}

// Type Alias version
type TwoNumberCalc = (x: number, y: number) => number

const add: TwoNumberCalculation = (a, b) => a + b

const subtract: TwoNumberCalc = (x, y) => x - y

// Sometimes we don't return anything from type annotations
function printFormattedJSON(obj: string[]) {
    console.log(JSON.stringify(obj, null, "   "))
}

const z = printFormattedJSON(["hello", "world"])

// void means the return value of this function should be ignore
// void should only appear as a function return type
// undefined means it cannot return anything

// @errors: 2322
function invokeInFourSeconds(callback: () => undefined) {
    setTimeout(callback, 4000)
  }
  function invokeInFiveSeconds(callback: () => void) {
    setTimeout(callback, 5000)
  }
  
  const values: number[] = []
  // @ts-expect-error
  invokeInFourSeconds(() => values.push(4))
  invokeInFiveSeconds(() => values.push(4))

// Construct Signatures
// Describe what should happen with the new keyword
interface DateConstructor {
    new (value: number): Date
}

let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()

// Function Overloads
// https://www.typescript-training.com/course/fundamentals-v3/09-functions/

// Best Practices for functions
// Explicitly define return types
// So that error appear close to where you need to fix them

