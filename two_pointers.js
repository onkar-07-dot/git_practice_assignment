// given an array , print the elements in the array whose sum is equal to k


let arr =[1,5,2,9,6,8,12,43]

let x= arr.sort(function(a,b){return a-b})
//console.log(x)

let l= 0
let n=x.length
let r= n-1
let k=14
let sum= x[r]+x[l] 

    while(l<r){
        let sum= x[r]+x[l] 

        if(x[l]+x[r]==k){

            console.log(x[l],x[r])
           break
        }
        else if(sum < k){

            l++
        }
        else{
            
            r--
        }
    }
