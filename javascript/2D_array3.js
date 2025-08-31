 //// print the 2D array in this format ==[6,8,5,3,4,5,1,2,6].

let arr = [[1,2,6],
          [3,4,5],
          [6,8,5]]


let bag=""
for(let i=arr.length-1;i>=0;i--){
           
    for(let j = 0;j<arr[i].length ;j++){

       // console.log(arr[i][j])
        bag+= arr[i][j]
    }
            
}

console.log(...bag)          