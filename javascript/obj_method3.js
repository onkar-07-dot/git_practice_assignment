


let obj={

   
    name:"onkar",
    age :23,
    education:"btech",

    reg:function(){

        console.log("name ",this.name)
        console.log("age ",this.age)
        console.log("education ",this.education)
       console.log("registration successfully with the above details")
    },

    clear :function(){

    this.name="",
    this.age ="",
    this.education=""
    


        console.log(this.name)
        console.log(this.age)
        console.log(this.education)
       console.log("the form has been cleared ")
    },


    

}

obj.reg();
obj.clear()



