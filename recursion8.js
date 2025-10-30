

function fn(arr,i , need){

    if(need ==0){
        return 1
    }
    if(need <0 || i<0 ){
        return 0                     

    }

    return fn(arr,i-1,need-arr[i]) +fn(arr,i-1,need)
}

console.log(fn([1,2,3,4,5],4,5))