let PersonName :string = "";

PersonName = prompt("what is your name?") || "";

if(PersonName !== null && PersonName !== ""){
    alert(`Hello ${PersonName}, would you like to learn some python today?`)
}

else{
    alert('you have to fill your name !')
}