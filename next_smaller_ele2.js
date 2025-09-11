
// find the  smaller neighbour element in the array from RHS

let arr = [39,27,11,4,24,32,32,1]
let stk= []
let ans = []

for(let i=0;i<arr.length;i++){

    while(stk.length!== 0 && stk[stk.length-1]>=arr[i]){

        stk.pop()
    }

    if(stk.length==0){
        ans.push(-1)
    }

    else{

        ans.push(stk[stk.length-1])
    }

    stk.push(arr[i])
}

let res = ans.reverse()
console.log(res)