

let person ={

    name:"onkar",
    age:22,
    education:"Btech"
};

let student={
    sayname : function(){
    
        console.log("I am "+this.name)
        console.log("my age is "+this.age)
        console.log("my eduaction is "+this.education)
        
    }

}


Object.setPrototypeOf(student ,person)

//console.log(person,student)
console.log(student.sayname())