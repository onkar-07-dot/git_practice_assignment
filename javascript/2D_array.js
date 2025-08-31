// print the 2D array.

let arr = [[1,2],
          [3,4,5],
          [6,8]]


let bag = ""
for(let i =0;i<arr.length;i++){

    for(let j= 0;j<arr[i].length;j++){
        bag=bag+arr[i][j]
    }

}

console.log(...bag)
