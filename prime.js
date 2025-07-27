// find the elements whose neibour is prime number in the given array.

let arr = [3,4,5,6,7,8];
let count=0;

for(let i =0 ; i<arr.length;i++){

    if(prime(arr[i-1])  || prime(arr[i+1])){
        console.log(arr[i])
        count++;
    }
}

 function prime(num){

    for(let i=2;i<num;i++){

        if(num%i!=0){

            return true;
        }
        else{

            return false;
        }
    }    

}

console.log(count);