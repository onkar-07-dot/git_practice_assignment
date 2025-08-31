 //// print the 2D array in this format ==[6,3,1,8,4,2,5,5,6].

let arr = [[1,2,6],
          [3,4,5],
          [6,8,5]]


let bag=""
for(let i=0;i<=arr.length-1;i++){
           
    for(let j = arr[i].length-1 ;j>=0;j--){

       // console.log(arr[i][j])
        bag+= arr[j][i]
    }
            
}

console.log(...bag)          