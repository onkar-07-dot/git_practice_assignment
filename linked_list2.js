

class Node{

    constructor(element){
        this.ele = element;
        this.next = null

    }    
}
class printLL{

      constructor(){
        this.head = null
      }

      insert(element){

        var newnode = new Node(element)

        if(this.head===null){
            this.head= newnode
        }
        else{
            let temp = this.head
            while(temp.next !==null){
                temp= temp.next
            }
            temp.next = newnode
        }
      }

      insertAt(element , position){
        var newnode = new Node(element)

        if(position===0){
            newnode.next = this.head
            this.head = newnode
        }

        let temp = this.head;
        let count =0
        while(position != null && count < position-1){
            temp =temp.next
            count++

        }   
        if(temp===null){
            console.log("out of range")
            return
        }

        newnode.next = temp.next
        temp.next = newnode

      }

      printlist(){

        let temp = this.head
        let bag = ""
        while(temp!==null){
            bag = bag+temp.ele +"==>";
            temp =temp.next
        }

        bag+="null"
        console.log(bag)
      }
}

// var n1 = new Node(22)
// console.log(n1)

var l1 = new printLL()
l1.insert(12)
l1.insert(13)
l1.insertAt(15,1)
l1.insertAt(17,2)
l1.insert(14)
l1.printlist()