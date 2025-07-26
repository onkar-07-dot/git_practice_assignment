 // write the function isodd which return boolean value based on number is odd or not.



 
 function isodd(num){


    if(num%2!=0){

        return true;
    }
    else{
        return false;
    }
 }

 function odd(){
     let bag ="";  
    for(let i =0 ; i<=50 ; i++){

        if(i%2!=0){


            bag = bag +i+" ";
          

        }
        


    }
        console.log(bag); 
 }

 let ans = isodd(4);

 console.log(ans);

 odd();