

function usercreate(name){

    this.name=name

}

usercreate.prototype.sayname = function(){
    console.log("I am "+ this.name)
}

let user1 = new usercreate("onkar")
console.log(user1)
console.log(user1.sayname())
