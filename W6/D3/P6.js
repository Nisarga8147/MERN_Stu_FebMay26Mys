//Directory(folder) operation: mkdir, readdir and rmdir/rm
const fs = require("fs");
const path = require("path");

const demoDir = path.join(__dirname,"demo-folder");

//To create folder
fs.mkdirSync(demoDir,{recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File 1 content");
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File 2 content");

//To check folder contents
const entries = fs.readdirSync(demoDir);
console.log("Directory contents:",entries);

//delete folder
fs.rmSync(demoDir,{recursive:true, force:true});
console.log("Directory exists?",fs.existsSync(demoDir));