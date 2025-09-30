// fibonacci series

function fibo(n){

    if(n == 0 || n ==1){
        return n
    }
    else{
        return fibo(n-1) + fibo(n-2)
    }
}


console.log(fibo(6))


// factorial 

function fact(n){
    if(n==0){
        return 1
    }
    else{

        return n*fact(n-1)
    }
}

console.log(fact(5))