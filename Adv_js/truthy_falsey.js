
//truthy_falsey values
function is_falsey(a){

if(a){
    console.log("a is truthy")
}
else{

    console.log("a is falsey")
}
}

is_falsey("vivek")
is_falsey(null)
is_falsey(0)
is_falsey("")

// string conversion

let a = "12234"
let b = (Number(a))
console.log(b)
console.log(typeof(b))


let istrue = true
let c = (String(istrue))
console.log(c)
console.log(typeof(c))

let istrue2 = true
let c1 = (Number(istrue))
console.log(c1)
console.log(typeof(c1))


//parseInt

let money = "100rs"
console.log(parseInt(money))

let value = "1232restrv"
console.log(parseInt(value))


