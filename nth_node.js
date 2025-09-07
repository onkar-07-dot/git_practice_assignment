// find the nth node from the end
class nth_node{

    constructor(nodedata){
        this.data = nodedata;
        this.next =null
    }
};
function findnode(head,n){

    let length =0
    let temp = head
    while(temp != null){
        length++
        temp = temp.next
    }

    if(length < n){
        return null
    }
    temp = head

    for(let i=0;i<length-n;i++){
        temp=temp.next
    }
    return temp.data
};

 let head = new nth_node(1)
    head.next = new nth_node(2)
    head.next.next = new nth_node(3)
    head.next.next.next = new nth_node(4)
    head.next.next.next.next = new nth_node(5);
    head.next.next.next.next.next = new nth_node(6);
    console.log(findnode(head , 4 ))

