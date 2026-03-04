//Function scope
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
     console.log(insideVar);//function scoped
     console.log(insideLet);//block scoped
     console.log(insideConst);//block scoped
}
scope();

function varFunctionScoped(){
    if(true){
        var x = 40;
        let y = 50;
        console.log("y:",y);
    }
    console.log("x:",x);
   
}
varFunctionScoped();