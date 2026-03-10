let employee = [
    {name:"abhi",basePay:30000,bonus:2000,taxRate:0.4},
    {name:"asha",basePay:40000,bonus:3000,taxRate:1.4},
    {name:"deeshan",basePay:20000,bonus:1000,taxRate:0.2},
    {name:"hasini",basePay:50000,bonus:4000,taxRate:1.1}
];
let invalid = employee.filter(a=>a.basePay<=0|| a.bonus<0 || a.taxRate<0 || a.taxRate>1);
console.log("invalid:",invalid);
let netPay = invalid.map(emp => {
  const gross = emp.basePay + emp.bonus;
  const netPay = gross - (gross * emp.taxRate);
  return { name: emp.name, netPay: netPay };
});

const totalNetPayout = netPay.reduce((sum,emp) => sum + emp.netPay, 0);
console.log("NetPay:",netPay);
console.log("TotalNetPayout:",totalNetPayout);