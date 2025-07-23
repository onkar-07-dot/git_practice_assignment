let num=12;

if(num<=1){
    console.log("prime number")

}
if(num>=2){

    for(let i = 2 ;i<num ; i++ ){

        if(num%i==0){

            console.log(" prime ")
        }

        else{

            console.log("not prime ")
        }
    }
}