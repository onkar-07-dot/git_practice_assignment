//rest
function Rest(...rest){
    console.log(rest)

}
Rest('cricket','football','kabaddi','volleyball')

//spread

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]
console.log(...arr1,...arr2)

//scopeS

function scope(){

    var name="onkar"
    var  lang ="js"
}

//console.log(name,lang)// get error

if(1==1){
    var name="onkar"
    var  lang ="js"
}
console.log(name,lang)

// Immediate function

;(function add(a,b){
   
    console.log(a+b)
})(10,20)

// Destructuring array and object

let arr=[1,2,3,4,5,6,7]
var [ele1,ele2,ele3,,,ele6] = arr
console.log(ele1,ele2,ele3,ele6)

// This keyword

function saygoodmor(){

    console.log(this,"Goodmorning")
}

function sayhello(){

    console.log(this,"hello")
    saygoodmor()
}

sayhello()

function data(){

    let obj={

        name:"onkar",
        age:22,
    }

    let fun=function(){

        console.log("hello",this.name)
    }

    console.log(obj)
    fun()
    
}

data()







