
let arr=[]
let front=0
let rear=0
let count=0
let size=5

function enqueue(data){

    if(count==size){
        console.log("arr is full")
        return
    }

    arr[front]=data
    front=(front+1)%size
     count++
}


function dequeue(){

    if(count==0){
        console.log("arr is empty")
        return
    }

    console.log(arr[rear])
    rear=(rear+1)%size
    count--
}


enqueue(20)
enqueue(30)
enqueue(40)
dequeue()
enqueue(50)
dequeue()
enqueue(60)
enqueue(70)
enqueue(80)
console.log(arr)