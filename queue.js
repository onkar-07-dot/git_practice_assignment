

let arr=[]
let front=0
let rear =0
let size=5

function enqueue(data){

    if(front==size){

        console.log("queue is full")
        return
    }

    arr[front]=data
    front++

}



function dequeue(){

    if(front==rear){
        console.log("queue is empty")
        return
    }

    console.log(arr[rear])
    arr[rear] = undefined
    rear++

}

enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)
enqueue(60)
dequeue()
dequeue()
console.log(arr)
