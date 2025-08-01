// given an array , print the output in zig-zag pattern
// output=[1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13]


let arr =[[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10,11,12],
          [13,14,15,16]
        ]

let bag ="";

for(let i=0;i<arr.length;i++){
    if(i%2!=0){

           for(var j=arr.length-1;j>=0;j--){
            bag=bag+arr[i][j]+" "
           }
        }
    else{

    for(var j=0;j<arr[i].length;j++){

        
    bag=bag+arr[i][j]+" "
    }
}
}

console.log(bag)