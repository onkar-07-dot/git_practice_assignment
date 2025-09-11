
// find the  greater neightbour element from the RHS 
let arr = [5,4,1,3,2]
let stk = []
let ans = []

for(let i=0;i<arr.length;i++){

    while(stk.length!==0 && stk[stk.length-1]<=arr[i] ){
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