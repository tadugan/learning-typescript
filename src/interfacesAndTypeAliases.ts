// Interfaces and Type Aliases

// A way you can give a friendly name to your types

// Type Aliases
import { UserContactInfo } from "./userContactInfo";

function printContactInfo(info: UserContactInfo) {
    console.log(info);
    console.log(info.email);
}

const tim = {email: 'tim@email.com', name: 'Tim', color: 'red'};

printContactInfo({email: 'tim@email.com', name: 'Tim'});

printContactInfo(tim);


// Interfaces

// More limited than type interfaces
// can only be used to define object types

interface UserInfo {
    name: string
    email: string
}
function printUserInfo(info: UserInfo) {
    info.name
}

// extends
// types can extend other types
// class Animal {
//     eat(food) {
//         console.log('tasty');
//     }
// }
// class Dog extends Animal {
// bark() {
//     return "woof"
// }
// }

// const d = new Dog()
// d.eat
// d.bark


// implements
// interface AnimalLike {
//     eat(food): void
//   }
  
// class Dog implements AnimalLike {
// bark() {
//     return "woof"
// }
// eat(food) { // if this method was missing, TypeScript will find an error
//     console.log('tasty')
// }
// }

// interfaces are open
// you can have multiple declarations
// You can always add to them

interface AnimalLike {
    isAlive(): boolean
}

function feed(animal: AnimalLike) {
    animal.eat

    animal.isAlive
}

interface AnimalLike {
    eat(food): void
}

// Interface vs. Aliase
// Generally you can use either

// If you need to define something other than an object type (like a union | operator) you must use an type alias
// If you need to define a type to use with the implements heritage term, it's best to use an interface
// If you need to allow consumers of your types to augment them, you must use an interface.

// Recursive types
// Types that are self referential
// example: nested arrays of numbers [1, 2, [3, [4], 5], 6];

type NestedNumbers = number | NestedNumbers[]

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221]

if (typeof val !== "number") {
  val.push(41)
}