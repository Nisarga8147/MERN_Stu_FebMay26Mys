//Callback function
//Is a function which is passed as an argument to another function
function greetUser(name,callback){
    console.log("Hello,",name);
    callback();
} 
greetUser("Nisarga",function(){
    console.log("callback function executed");
});