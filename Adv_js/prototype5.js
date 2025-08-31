

function person(someobj){
    
   this.name ="will smith"

}

function actor(){
let obj={}
obj.moviename="alladin"
// person(obj)
person.call(obj)

return obj

}

let will =actor()
console.log(will.name)
console.log(will.moviename)

