// given an arr ,remove one element from the array and the remaining elements sum is divisible by 7 .
// task is to find the fist index of smallest element


let arr = [4,3,2,7]

let min = Infinity;
let index =-1;
for(let j = 0 ;j<arr.length;j++){
    let sum = 0
for(let i=0;i<arr.length;i++){
 
    if(j!=i){
        sum =sum+arr[i]
        
    }
   
}

if(sum%7==0 && arr[j]<min){

    min=arr[j];
    index=j
}

}
console.log(index)



