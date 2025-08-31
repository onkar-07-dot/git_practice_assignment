


function fun(n){

    if(n==0){
        return
    }
    else{

        fun(n-1)
        console.log(n)
        fun(n-1)
    }
}

console.log(fun(4))