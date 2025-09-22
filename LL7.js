// rotate  the LL from the right dir to given position

class rotate{

    constructor(data){
        this.data = data
        this.next = null
    }
}

function rotateLL(head ,k){

    let temp = head
    let n = 0

    while(temp.next){
        temp = temp.next
        n++
    }

    temp.next = head
    temp = head

    k = k%(n+1)
    let jump = n-k

    while(jump){
        temp = temp.next
        jump--
    }

    head = temp.next
    temp.next = null

    return head
}

function printList(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(" -> "));
}

let head = new rotate(1);
head.next = new rotate(2);
head.next.next = new rotate(3);
head.next.next.next = new rotate(4);
head.next.next.next.next = new rotate(5);

printList(head)

let h2 = rotateLL(head , 3)
printList(h2)