// given an array of integer.
// write the program to find the sum of absolute differece all such pairs(a[i],a[j]) such that i<j is prime.

let arr = [1,2,3,5,7,12]

let sum =0;
for(let i=0;i<arr.length;i++){

    for(let j=1;j<arr.length;j++){

        if(isprime(j-i)){

            let diff= Math.abs(arr[i]-arr[j])
            sum = sum +diff


        }
    } 
   
}
console.log(sum)
 



function isprime(num){

       if(num<=1){

        return false;
       }
       else{

        for(let k = 2; k<num ;k++){

            if(num%k==0){

                return false;
            }
        
        
        }
        return true
        
       }
       

}


