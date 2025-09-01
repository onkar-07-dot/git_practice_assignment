

function fun(sub , food){

    console.log(this)

    console.log("hello from",this.name)

    console.log("my favourite subject is ",sub ,"and food is ",food)
}

fun.call({name:"onkar"},"js","panner")