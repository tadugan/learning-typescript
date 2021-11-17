// A top type is a type that describes any possible value allowed by the system
// Typescript provides 2 of these types any and Unknown
// any is flexible, like conventional javascript
// any does have valid use cases, like its use in console.log
// unknown seems like any
// unknown can't be used unless you narrow it, use a typeguard
// Practical uses for Top types
// useful when converting a Javascript project to Typescript
// You shouldn't try to convert a JS project in one pass, so any is useful for working gradually
// Bottom Type: never
// A bottom type is a type that describes no possible value allowed by the system (aka Javascript)
// TyeScript provides one bottom type: never
// Bottom types are useful for Exhaustive Conditionals
//  class Car {
//     drive() {
//       console.log("vroom")
//     }
// }
// class Truck {
//     tow() {
//       console.log("dragging something")
//     }
// }
// class Boat {
//     isFloating() {
//       return true
//     }
// }
// type Vehicle = Truck | Car
// let myVehicle: Vehicle = obtainRandomVehicle()
// // The exhaustive conditional
// if (myVehicle instanceof Truck) {
// myVehicle.tow() // Truck
// } else if (myVehicle instanceof Car) {
// myVehicle.drive() // Car
// } else {
// // NEITHER!
// const neverValue: never = myVehicle // IF you reach this point in the code, it shows that the value given could be something other than never
// }
