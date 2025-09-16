//insert at the begining

class insertatbegin{

    constructor(data){
        this.data = data
        this.next = null
    }
}
function insert(data,head){

    let newnode = new insertatbegin(data)
    if(head==null){
        head = newnode
    }
    else{

        newnode.next = head
        head = newnode
    }
    return head   
}

let head = null
console.log(head = insert(10, head));  
console.log(head = insert(20, head));  
console.log(head = insert(30, head));




