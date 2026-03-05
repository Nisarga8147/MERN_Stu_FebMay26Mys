//array map
let numArray=[1,2,3,4];
let squared = numArray.map(num=>num * num);
console.log(squared);

let prices=[100,200,300,400];
let priceWithGST=prices.map(price =>price + price*0.18);
console.log("price w/o tax:",prices);
console.log("price with tax:",priceWithGST);

//Using the map to extract files
let users=[
    {name:"Abhi",age:24},
    {name:"krishna",age:20}
];
let names = users.map(user=>user.name);
console.log(" ",names);