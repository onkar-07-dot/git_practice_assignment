// fill the gaps

class fillgap{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function gaps(head){

    let curr = head

    if(curr==null){
        return curr
    }

    while(curr.next !== null){

        if(curr.next.data == curr.data+1){
            curr =curr.next
        }

        else{

            let temp = curr.next
            let newnode = new fillgap(curr.data+1)
            curr.next = newnode
            newnode.next = temp
            curr =curr.next

        }
    }
    return head

}

function printList(head){

    let temp = head
    let res =[]
    while(temp){
        res.push(temp.data)
        temp =temp.next
    }
    console.log(res)
}

let head = new fillgap(3)
head.next = new fillgap(5)
head.next.next = new fillgap(7)

printList(head)

let ans = gaps(head)
printList(ans)

