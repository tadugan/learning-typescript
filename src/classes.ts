// Typescript Classes

// CLass constructor in JS
// class Car {
//     Constructor(make, model, year) {
//         this.make = make
//         this.model = model
//         this.year = year
//     }
// }

// Class Constructor in TS
class Automobile {
    make: string
    model: string
    year: number
    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }
}

let sedan = new Automobile("Honda", "Accord", 2010)


// @ts-expect-error // because this not a defined property
sedan.activateTurnSignal('left') // not safe!
// @ts-expect-error // because these violate the declared types
new Automobile(2010, "Honda", "Accord") // not safe!

// Access Modifier Keywords
// public, private AND protected
// public = everyone can access (this is the default)
// protected = the instance itself and its subclasses can access it
// private only the instance itself

// @errors: 2341 2445
// @noImplicitAny: true
function generateDoorLockCode() {
    return Math.random()
}
function generateVinNumber() {
return Math.random()
}
function unlockCar(c: Car, code: number) {
/**/
}
/// ---cut---
class Car {
public make: string
public model: string
public year: number
protected vinNumber = generateVinNumber()
private doorLockCode = generateDoorLockCode()

constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
}

protected unlockAllDoors() { 
    unlockCar(this, this.doorLockCode)
}
}

class Sedan extends Car {
constructor(make: string, model: string, year: number) {
    super(make, model, year)
    this.vinNumber
    //    ^?

    // @ts-expect-error // Error because doorLockCode is private and therefore only accessible within an instance of Car
    this.doorLockCode
    //    ^?
}
public unlock() {
    console.log("Unlocking at " + new Date().toISOString())
    this.unlockAllDoors()
}
}

let s = new Sedan("Honda", "Accord", 2017)
s.make
// ^?

// @ts-expect-error // vinNumber is protected and only accessible within class Car and its subclasses
s.vinNumber
// ^?

// @ts-expect-error // vinNumber is private and only accessible within the Class Car
s.doorLockCode
// ^?
s.unlock()

// JS Private Class fields

//  Param Properties
// A more concise syntax for class constructors

// Example without Param Properties:
//   class Car {
//     make: string
//     model: string
//     year: number
//     constructor(make: string, model: string, year: number) {
//       this.make = make
//       this.model = model
//       this.year = year
//     }
//   }

// Example with Param Properties
// class Car {
//     constructor(
//       public make: string,
//       public model: string,
//       public year: number
//     ) {}
// }