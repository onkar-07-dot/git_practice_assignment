// how many numbers are divisible by 3 in 1 to 100

let count=0;
function div(){


    for(let i = 1;i<=100;i++){

        if(i%3==0){
            console.log(i)
            count++;
        }

    }
    
    console.log(count);
}

div();