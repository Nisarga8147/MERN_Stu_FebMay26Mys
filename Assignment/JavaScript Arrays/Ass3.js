let permission = [
    {role:"admin",action:"READ",allowed:true},
    {role:"student",action:"WRITE",allowed:false},
    {role:"guest",action:"WRITE",allowed:false},
    {role:"student",action:"READ",allowed:true}
 ];
let rules = permission.filter(a=>a.allowed===true);
console.log(rules);
let allowedpair = permission.map(b=>b.role+":"+b.action);
console.log(allowedpair);
let items = ["admin","student","student"];
let rolecount = permission.reduce((a,b)=>{let role = b.role;
    a[role]=(a[role]||0)+1;
    return a;},{});
console.log("role count: ",rolecount);
