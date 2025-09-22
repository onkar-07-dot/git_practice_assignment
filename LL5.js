// add 1 to the linked list


class add{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function addone(head){
    head = reverse(head)
    let pre = null
    let curr = head
    let sum = 0
    let carry = 1

    while(curr!==null){
        sum = curr.data +carry
        carry = Math.floor(sum/10)
        curr.data = sum% 10

        pre = curr
        curr = curr.next
    }

    if(carry>0){
        pre.next = new add(carry)
    }

    head = reverse(head)
    return head
}

function printls(head){

    let temp = head
    let result = []
    while(temp){
        result.push(temp.data)
        temp = temp.next
    }
    console.log(result.join(" -> "))
}

let head = new add(9)
head.next = new add(9)
head.next.next = new add(9)
head.next.next.next = new add(9)
let newhead = addone(head)
printls(newhead)