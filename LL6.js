// adding two linked list

class add{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function addLL(h1,h2){
    let l1 = h1
    let l2 = h2
    let h3 = new add(0)
    let tail = h3
    let carry = 0

    while(l1 !== null || l2 !== null){
      let  sum = 0

        if(l1 == null){
           sum = l2.data;
           l2 = l2.next
        }

        else if(l2 == null){
            sum = l1.data
            l1 = l1.next
        }

        else{

            sum = l1.data +l2.data
            l1 =l1.next
            l2 =l2.next
        }

        sum = sum + carry
        carry = Math.floor(sum/10)
        let data = sum%10
    
        tail.next = new add(data);  
        tail = tail.next;
}

    if(carry!==0){
        tail.next = new add(carry)
    }

    return h3.next

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

let h1 = new add(2);
h1.next = new add(4);
h1.next.next = new add(3);

let h2 = new add(5);
h2.next = new add(6);
h2.next.next = new add(4);


let newhead = addLL(h1,h2)
printls(newhead)