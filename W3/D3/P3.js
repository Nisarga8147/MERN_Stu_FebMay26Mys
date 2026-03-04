//break
for(let i=0;i<5;i++){ //forward loop
    if(i===3){
        console.log("i",i);
        break;
    }
}

//continue
for(let i=0;i<5;i++){ //forward loop
    if(i===3){
        continue;
    }
    console.log("i",i);
}