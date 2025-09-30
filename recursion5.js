//find the number of ways  to climb the steps

function ways(steps , n){

    if(steps == n){
        return 1
    }
    else if(steps > n){
        return 0
    }
    else{
        return ways(steps+1,n) + ways(steps+2,n)+ways(steps+3,n)
    }
}

console.log(ways(0,4))