// given an array , print the 3 elements in the array whose sum is equal to k 
// a+b+c=k

let arr =[1,5,2,9,6,8,12,43]
let x= arr.sort(function(a,b){return a-b})
//console.log(x)
let l= 0
let n=x.length
let r= n-1
let k=15
let sum= x[r]+x[l] 

     for(let i=0;i<x.length-3;i++){


        

        while(l<r){
            let sum= x[r]+x[i]+x[l]

        if(x[r]+x[i]+x[l]==k){

            console.log(x[r],x[i],x[l])
           break
        }
        else if(sum < k){

            l++
        }
        else{
            
            r--
        }
    }
}
