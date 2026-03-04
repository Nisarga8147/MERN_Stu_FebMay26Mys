//Basics of Objects
const person = {
    name:"Thanu",age:26,isStudent:false
};
console.log("Person:",person);
console.log("Name:",person.name);
console.log("Age:",person['age']);

// Add a new property
person.city="mysore";
console.log("Person:",person);
//Modify
person.age=27;
//delete
delete person.isStudent;
console.log("Person:",person);

//Object Constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log("car:",car);