

function fun(sub , food){

    console.log(this)

    console.log("hello from",this.name)

    console.log("my favourite subject is ",sub ,"and food is ",food)
}

let bind = fun.bind({name:"onkar"},"js","panner")
bind()