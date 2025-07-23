
// this is code for the find the given number is prime or not.
let num=1100;

if(num<=1){
    console.log("prime number")

}
if(num>=2){

    for(let i = 2 ;i<num ; i++ ){

        if(num%i==0){

            console.log("  the number is not prime number ")
        }

        else{

            console.log("the numberis prime number ")
        }
    }
}