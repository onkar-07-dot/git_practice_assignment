

//push opertaion
let arr=[]
let n=5
let top=-1

function push(data){

    if(top==n-1){
        console.log("overflow")
        return
    }

    top++
    arr[top] = data 
    
}

//pop operation

function pop(){

    if(top==-1){

        console.log("underflow")
        return
    }

    arr[top]= undefined
    top--
}
//peek operation

function peek(){

    if(top==-1){

        console.log("underflow")
        return
    }

   console.log(arr[top])
    top--
    
}

push(30)
push(60)
push(90)
pop()
push(100)
pop()
peek()
console.log(arr)



