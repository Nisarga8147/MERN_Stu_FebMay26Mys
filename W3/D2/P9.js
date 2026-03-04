//Immediately invoked function expression (IIFE)

//Without parameters
(function(){
    console.log("Basic IIFE executed Immediately");
})();

//With parameters
(function(appName,version){
    console.log("appName:",appName,"Version:",version);
})("NodeJS","v22.22.0");

//With return values
const result = (function(){
    const a=10 , b=20;
    return a+b;
})();
console.log("Sum is",result);