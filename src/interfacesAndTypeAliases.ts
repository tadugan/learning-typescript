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