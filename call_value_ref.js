
// call by value
var a = 10
let b = a

var a= 20

console.log("the value of a is ",a)
console.log("the value of b is ",b)


// call by reference

var x = {value:10 }
var y = x

x.value = 20

console.log("the value of a is ",x)
console.log("the value of b is ",y)