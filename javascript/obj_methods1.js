// write the function in the object which print your name and the age.


let obj = {

    info: function(name,age){

        console.log("my name is",name);
        console.log("my age is "+age+" years old")
    }
}

let call=(obj.info("onkar",22))

console.log(call)