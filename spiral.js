// given an 2D array , print the array in spiral manner .


let arr =[[1,2,3,4],
         [5,6,7,8],
         [9,10,11,12],
         [13,14,15,16]
        ]

let n = arr.length
let left=0;
let top=0
let bottom = n-1
let right= n-1
let bag=""
let  count =0

while(n*n>count){

    for(let i=left ; i<=right ;i++){

       bag+= arr[top][i]+" "
        count++
    }
    top++
    

    for(let i=top ; i<=bottom ;i++){

       bag+= arr[i][bottom]+" "
        count++
    }
    
    right--
    
    for(let i= right ; i>= left;i--){

       bag+= arr[bottom][i]+" "
        count++
    }
    bottom--

    for(let i= bottom ; i>= top;i--){

       bag+= arr[i][left]+" "
        count++
    }
    left++

    
    

    
}
console.log(bag)

