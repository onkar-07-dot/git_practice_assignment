 // find the absolute difference between two numbers 
 // sample input = 2,8
 //sample output = 6


 function abs(num1,num2){

    let result = num1-num2;

    if(result<0){

        result = (result*-1)
    }
    return result;
 }


 let ans = abs(2,8);
 console.log(ans);