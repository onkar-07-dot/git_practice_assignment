
class reverse{

    constructor(nodedata){

        this.data = nodedata
        this.next = null
    }
};
    function find(head){
        let present = head
        let past = null
        let future = null

        while(present!==null){

            future = present.next
            present.next = past
            past = present
            present = future
        }
        head = past
        let temp = head;
        let str = "";
             while(temp!==null){
                str += temp.data + (temp.next ? " -> " : "");
                temp = temp.next;
    }
            console.log(str);
            return head

    }

let head = new reverse(1)
head.next = new reverse(2)
head.next.next = new reverse(3)
head.next.next.next = new reverse(4)
head.next.next.next.next = new reverse(5);
head.next.next.next.next.next = new reverse(6);
find(head)

