//Introduction to callback function
function greetUser(name,callback){
    console.log("Hello,"+name);
    //The callback function is executed only after the executed of the current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}
greetUser("Dishan",showCompletionMessage);