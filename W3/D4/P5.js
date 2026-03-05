//Reduce method
let nums = [5,10,15];
let total = nums.reduce((intermediateSum,current)=>intermediateSum+current,0);
console.log("total:",total);
let avg = nums.reduce((intermediateSum,current)=>intermediateSum+current/nums.length,0);
console.log("avg:",avg);

//reduce to object count by category
let items = ["pen","pencil","pen","eraser","book"];
let count = items.reduce((intermediateValue,Item)=>{intermediateValue[Item]=(intermediateValue[Item]||0)+1;
    return intermediateValue;},{});
console.log("Item count: ",count);