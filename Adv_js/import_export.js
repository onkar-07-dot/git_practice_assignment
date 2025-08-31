

class person{

    constructor(name){
        this.name=name
    }


    sayhello(){

        console.log(this.name+"says hello")
    }
}

class teacher extends person{

    constructor(name,subject){

        super(name);
        this.subject=subject
    }

    teach(){

        console.log(this.name +" is leanring "+this.subject)
    }

    
}

class engg extends person{

    constructor(name){
    super(name)
    }

    earn(){
        return this.name +"the engineer , make money"
    }
}

export { teacher ,engg}
export default {person}