

function fun(arr,x){

    if(x==0){
        return 0
    }
    else{

        return fun(arr,x-1)+ arr[x-1]
    }

}

console.log(fun([1,2,3,4,5],5))