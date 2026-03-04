//json stringify parse
const employee = {
    id:101,
    name:"thanuja",
    dept:"ME",
    isActive: true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);

//JS parsing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);