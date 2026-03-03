//Conditional statements
 let age=20;
 if(age<10){
     console.log("Child");
 }
 else if(age<18){
      console.log("Teenager");
 }
 else{
     console.log("Adult");
 }

// Switch statement
console.log("Switch statements");
const day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("start of the week");
        break;
    case "Wednesday":
        console.log("Mid of the week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    default:
        console.log("Some day in the week");
        break;
}

//Type Conversion
let n = Number("ABC");
console.log("n:",n,"Type of n:",typeof n,"isNaN",isNaN(n));