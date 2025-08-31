// find the number is prime or not using brute force method


 function isprime(num){

    for(let i=2;i<Math.sqrt(num);i++){

        if(num%i!=0){

            return true;
        }
        return false

    }
 }

 console.log(isprime(100))