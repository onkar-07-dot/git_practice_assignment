class person{

    constructor(name,city){

        this.name =name
        this.city =city
    }

    sayhello(){

        console.log("hello , welcome "+this.name+" from "+this.city)
    }
}

let p1 = new person("vivek","pune")
console.log(p1)
p1.sayhello()