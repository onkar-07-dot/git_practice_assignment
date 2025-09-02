
class Node{

    constructor(ele){
        this.ele = ele
        this.next = null
    }
}

class linked_list{

    constructor(){
        this.head =null
        this.size = 0
    }

    add(ele){

        var node = new Node(ele)
        if(!this.head){
            this.head=node
        }
        else{
            var current = this.head
            while(current.next){
                current =current.next
            }
            current.next =node
        }
        this.size++
    }

    isempty(){
        return this.size===0 ? true :false
    }

    sizeofLL(){
        return this.size
    }

    printlist(){

        var current = this.head
        var index = 0
        while(current){

            console.log("element: ",current.ele,"index : ",index++)
            current = current.next
        }
    }
    
}

 var ele1 = new linked_list()
 console.log(ele1.isempty())

ele1.add(12)
ele1.add(19)
// console.log(ele1)
ele1.printlist()
 console.log(ele1.sizeofLL())



