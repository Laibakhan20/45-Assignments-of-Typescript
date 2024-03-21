

// Writw a program that creates objects containing these items
let personName : string = "Laiba";
const personName_Array : string[] = ["Person", "Car", "Cold Drink"];

// Datatype of person object
interface person {
     age : number ,
     Name : string ,
     Nationality : string ,
     student : boolean
}

// Person object
let person :person = {
     age : 20 ,
     Name : 'Laiba' ,
     Nationality : 'Pakistan' ,
     student : true
}

// Person print
console.log(person) ;

// Datatypes of car object
interface Car {
     maker : string ,
     color : string ,
     automatic : Boolean
}

// Car object
let Car = {
     maker : "toyota" ,
     color : "black" ,
     automatic : true
}

// print car object
console.log(Car) ;
