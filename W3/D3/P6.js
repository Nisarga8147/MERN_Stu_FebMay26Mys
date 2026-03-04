//Nested object and Methods
const student = {
    firstName:"Gowrav",
    lastName:"Gowda",
    scores:{
        maths:90,
        science:83
    },
    hobbies:["singing","reading"],
    fullname:function(){
        return this.firstName+" "+this.lastName;
    },
    greet(){
        console.log("Hi,",this.fullname());
    }
};
console.log(student.fullname());