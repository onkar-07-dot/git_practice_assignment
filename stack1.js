

let arr=[]
let size = 5
let top=-1
let arr2=[]

function addEle(data){

    if(top==size-1){
        console.log("stack is overflow")
        return;
    }
    top++
    arr[top]=data;
   
}

function pop(){
    if(top==-1){
        console.log("stack is underflow")
        return
    }
    arr[top]=undefined
    top--

    
}

if(pop()){

    arr2.push()
}


addEle(2)
addEle(3)
addEle(4)
addEle(5)
addEle(6)
addEle(6)

pop()
pop()
pop()
addEle(6)
console.log(arr)
console.log(arr2)
