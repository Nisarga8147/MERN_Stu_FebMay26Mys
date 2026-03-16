let ticket =[
{id:"T101",priority:"HIGH",resolved:true},
{id:"T102",priority:"MEDIUM",resolved:false},
{id:"T103",priority:"LOW",resolved:true},
{id:"T104",priority:"HIGH",resolved:false},
{id:"T105",priority:"MEDIUM",resolved:true},
{id:"T106",priority:"LOW",resolved:false},
];
ticket.unshift({id:"T100",priority:"HIGH",resolved:"true"});
console.log(ticket);
ticket.push({id:"T107",priority:"MEDIUM",resolved:"false"},{id:"T108",priority:"LOW",resolved:"true"});
console.log(ticket);
ticket.shift();
console.log(ticket);
ticket.pop();
console.log(ticket);
let unresolved = ticket.filter(tickets=>tickets.resolved===false);
console.log(unresolved);
let pendingIds = ticket.filter(a=>a.resolved===false).map(s=>s.id);
console.log(" ",pendingIds);
