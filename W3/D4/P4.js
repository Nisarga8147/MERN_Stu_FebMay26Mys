//filter method
let marks=[75,49,56,70,82,51,68];
let passed = marks.filter(mark=>mark>=70);
console.log(marks);
console.log(passed);

let students=[
    {name:"abhi",score:78},
    {name:"banu",score:80},
    {name:"chandu",score:65},
    {name:"deeshu",score:90},
];
// let pass = students.filter(student => student.score>=70).map(s=>s.name);
// console.log(" ",pass);
// //or
let qualified = students.filter(a=>a.score>=70);
let qualifiedstudent = students.map(b=>b.name);
console.log(qualifiedstudent);