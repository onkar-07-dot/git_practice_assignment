

function fun(){
}

fun.prototype.name ="onkar"

let obj={

    age:22
}

Object.setPrototypeOf(obj,fun.prototype)

console.log(obj.name)