// number of possible ways to load the truck

function ways(k , arr){
    if(k== 0){
        return 1
    }
    else if(k< 0){
        return 0
    }
    else{
        let count =0
        for(let i = 0 ;i<arr.length;i++){
            count = count + ways(k-arr[i],arr)
        }
        return count
    }
}


console.log(ways(6,[2,3,4]))