 //// print the 2D array in this format ==[6,2,1,5,4,3,5,8,6].

let arr = [[1,2,6],
          [3,4,5],
          [6,8,5]]


let bag=""
for(let i =0;i<arr.length;i++){
           
    for(let j = arr[i].length-1 ;j>=0;j--){

       // console.log(arr[i][j])
        bag+= arr[i][j]
    }
            
}

console.log(...bag)          