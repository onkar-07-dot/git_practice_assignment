// palindrome

class palindrome{
    constructor(data){
        this.data = data
        this.next = null
    }
}
function reverse(head){
    var prev = null
    var curr = head

    while(curr){
        var after = curr.next
        curr.next = prev

        prev = curr
        curr = after
    }
    return prev
}

function findmid(head){

    var slow = head
    var fast = head

    while(fast && slow.next){
        slow =slow.next
        fast = fast.next.next
    }
    return slow
}

function palind(head){

    var mid = findmid(head)
    var rev = reverse(mid)

    while(rev){
        if(rev.data != head.data){
            return false
        }
        
        rev = rev.next
        head = head.next
    }
    return true
};

function printList(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(" -> "));
}

let head = new palindrome(1);
head.next = new palindrome(2);
head.next.next = new palindrome(1);
head.next.next.next = new palindrome(2);

printList(head)
console.log(palind(head))


