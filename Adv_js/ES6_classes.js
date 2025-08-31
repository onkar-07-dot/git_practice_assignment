
class person{

    constructor(name){

        this.name=name
    }

    sayhello = function(){
        console.log("hello",this.name)
    }
}

class teacher extends person{

    constructor(name,subject){
        super(name)
        this.subject =subject   
    }
    teach(){

        console.log(this.name + " is learning "+ this.subject)
    }

}

let p1 =new teacher("onkar","javascript")
console.log(p1)
console.log(p1.teach())
