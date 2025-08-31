

let obj = {

    "name":"shubham",
    "age":23,
    "print": function(name){

        console.log("hello",this.name);
    }
}

console.log(obj);
obj.print("everyone");
let nm= obj.name="onkar";
obj.print(nm)


















