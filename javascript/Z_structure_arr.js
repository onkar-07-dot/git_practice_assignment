


let arr = [[1,2,3],
          [4,5,6],
          [7,8,9]]

let bag = ""

for(let i=0;i<arr.length-2;i++){
    for(let j=0;j<arr[i].length;j++){

      bag=bag+arr[i][j]+" "
    }
    
}
console.log(bag)
let bag1=""
for(let i=1;i<arr.length;i++){
    for(let j= arr[i].length-2;j>0;j--){

        if(i==j){
            bag1=bag1+arr[i][j]+" "
        }

    }
}
console.log(bag1)


let bag2 = ""

for(let i=2;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){

      bag2=bag2+arr[i][j]+" "
    }
    
}
console.log(bag2)