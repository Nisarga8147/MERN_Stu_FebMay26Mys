//Understanding path module and JSON module
const path = require("path");

//JSON is loaded as a normal JS object in commonJS
const appConfig = require("./support/app-config.json");
console.log("__dirname",__dirname);
console.log("__filename",__filename);
console.log("Application name:",appConfig.appName);
console.log("Application name:",appConfig.environment);
console.log("Application name:",appConfig.features.join(", ")); //if add the .join(", ") it will remove the square bracket