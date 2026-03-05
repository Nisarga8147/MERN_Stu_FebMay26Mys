//Array basics
console.log("Array basics");
//creating arrays
let emptyArray=[];
let numArray=[1,2,3,4];
let mixedArray=[32,"hello",true,null,{name:"nisarga"},[4,5]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//using constructor
let fruits = new Array("Apple","Graphs");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//push:add
fruits.push("cherry");
console.log(fruits);

//pop:remove
fruits.pop();
console.log(fruits);

//unshift:adds to beginning 
fruits.unshift("orange");
console.log(fruits);

//shift:remove from beginning
fruits.shift();
console.log(fruits);