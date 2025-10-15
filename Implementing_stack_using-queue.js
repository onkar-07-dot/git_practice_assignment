

let q1 = []
let q2 = []

function push(x){
    q1.push(x)
}

function pop(){
    if(q1.length === 0){
        console.log("stack is empty")
        return
    }
    while(q1.length>1){

        q2.push(q1.shift())
    }
   
    let popped = q1.shift()
    console.log("poped the element",popped)

    let temp = q1
    q1 = q2
    q2 = temp
}

function printlist(){
    if(q1.length ==0){
        console.log("stack is  empty")
        return
    }
    console.log(q1.join(" "))
}

push(12)
pop()
push(13)
pop()
push(14)
push(15)
push(16)
printlist()
pop()
printlist()