let personName :string = "";

personName = prompt("what is your name?") || "";

let lowercase :string = personName.toLowerCase();
let uppercase :string = personName.toUpperCase()
let titlecase :string = personName.split("").map(word => word.charAt().toUpperCase() + word.slice(1)
.toLowerCase()).join('')

if (personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here are your name in:
    LowerCase: ${lowercase}
    Uppercase: ${uppercase}
    TitileCase: ${titlecase}`)
}
else{
    alert('Please fill your name !')
}


