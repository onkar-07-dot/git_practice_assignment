
let arr = [5,4,1,3,2]
var stk = []
let left = []
let right =[]

for(let i=0;i<arr.length;i++){

    while(stk.length!==0 && arr[stk[stk.length-1]]<=arr[i]){
        stk.pop()
    }

    if(stk.length == 0){
        left.push(-1)
    }
    else{

        left.push((stk[stk.length-1])+1)
    }

    stk.push(i)
}
console.log(left)

var stk=[]
for(let i=arr.length-1;i>=0;i--){

    while(stk.length!==0 && arr[stk[stk.length-1]]<=arr[i]){
        stk.pop()
    }

    if(stk.length == 0){
        right.push(-1)
    }
    else{

        right.push((stk[stk.length-1])+1)
    }

    stk.push(i)
}  

right.reverse()
console.log(right)

let ans = []
for(let i = 0 ; i<arr.length ; i++){
    ans[i] = left[i]+ right[i]
}
console.log(ans)