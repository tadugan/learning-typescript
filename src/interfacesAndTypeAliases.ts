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
interface AnimalLike {
    eat(food): void
  }
  
class Dog implements AnimalLike {
bark() {
    return "woof"
}
eat(food) { // if this method was missing, TypeScript will find an error
    console.log('tasty')
}
}

