// given an array , find the subarray equal to the given sum



function is_equalsum(){

let arr=[1,4,20,3,10,5]
let sum = 33
let sdwin = 0
let high  = 0


for(let low=0;low<arr.length;low++){


 while(sdwin<sum && high<arr.length){

    sdwin = sdwin+arr[high]
    high++
 }

    if(sdwin==sum){

        return true;
        
    }
    sdwin= sdwin-arr[low]
      
     
}
return false

}

console.log(is_equalsum())



