

function fun(sub , food){

    console.log(this)

    console.log("hello from",this.name)

    console.log("my favourite subject is ",sub ,"and food is ",food)
}

fun.apply({name:"onkar"},["js","panner"])