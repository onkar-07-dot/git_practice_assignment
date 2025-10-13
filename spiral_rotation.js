// spiral rotating
let arr = [
    [1,10,9],
    [2,11,8],
    [3,12,7],
    [4,5,6]
]
let n = arr.length
let m = arr[0].length
let top =0 ,bottom = n-1 , left=0,right=m-1
let count = 0 , total = n*m
let bag = ""

while(total>count){

    for(let i = top ;i<=bottom && count<total;i++){
       bag+=arr[i][left]+" "
       count++
    }
    left++

    for(let j = left;j<=right && count<total;j++){
        bag+=arr[bottom][j]+" "
        count++
    }
    bottom--

    for(let i =bottom ; i>=top && count<total ; i--){
        bag+=arr[i][right]+" "
        count++
    }
    right--

    for(let j=right ; j>=left && count<total;j--){
        bag+= arr[top][j]+" "
        count++
    }
    top++

    


}

console.log(bag)
