let arr = [ 20,15,10,17]
let  k = 7
let max = findlargest(arr)
console.log(binarysearch(arr,0,max,k))

function calculate(arr,value,wood_req){
    let sum =0
    for(let i =0 ;i<arr.length;i++){
        if(arr[i]<=value)continue
        sum = sum+(arr[i]-value)
    }
    return sum>=wood_req ? true:false
}

function binarysearch(arr,low,high,wood_req){
    let ans = -1
    while(low<=high){
        let mid = low + Math.floor((high-low)/2)
        if(calculate(arr,mid,wood_req)){
            ans = mid
            low = mid+1
        }
        else{
            high = mid -1
        }
        
    }
    return ans
}

function findlargest(arr){
    let max =0
    for(let i =0 ;i<arr.length;i++){
        max = Math.max(max,arr[i])
    }
    return max
}

