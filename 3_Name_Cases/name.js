"use strict";
let personName = "";
personName = prompt("what is your name?") || "";
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split("").map(word => word.charAt().toUpperCase() + word.slice(1)
    .toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your name in:
    LowerCase: ${lowercase}
    Uppercase: ${uppercase}
    TitileCase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
