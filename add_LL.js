
class add{

    constructor(nodedata){

        this.val = nodedata;
        this.next = null
    }
};

let addLL = function(l1,l2){

    let ans = new add(-1)
    let current = ans
    let carry = 0
    let cur1 = l1
    let cur2 = l2
    while(cur1!==null || cur2!==null){
        let sum =0
        if(cur1==null){

            sum= sum +cur2.val
        }

        else if(cur2==null){

            sum = sum+cur1.val
        }

        else{

            sum = sum+cur1.val+cur2.val
            cur1 = cur1.next
            cur2 = cur2.next
        }

        sum = sum+carry
        carry = Math.floor(sum/10)
        sum = Math.floor(sum%10)
        current.next = new add(sum)
        current = current.next
    }

    if(carry !== 0){
        current.next = new add(carry)
    }

    ans = ans.next;
    return ans

} 

let l1 = new add(1);
l1.next = new add(2);
l1.next.next = new add(3);

let l2 = new add(2);
l2.next = new add(3);
l2.next.next = new add(4);

let result = addLL(l1, l2);


function printlist(head){
    let ll=[]
    while(head!=null){
        ll.push(head.val)
        head=head.next
    }
    console.log(ll)
}

printlist(result)