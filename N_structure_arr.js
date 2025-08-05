//Given an array , print the N structure as a output



let arr = [[1,2,3],
          [4,5,6],
          [7,8,9]]

let bag = ""

for(let i=2;i>=0;i--){
    for(let j=0;j<arr[i].length-2;j++){

      bag=bag+arr[i][j]+" "
    }
    
}
//console.log(bag)
let bag1=""
for(let i=1;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){

        if(i=j){
            bag1=bag1+arr[i][j]+" "
        }

    }
}
//console.log(bag1)

let bag2=""
for(let i=1;i>=0;i--){
    for(let j=2;j<arr[i].length;j++){

      bag2=bag2+arr[i][j]+" "
    }
}
console.log(...bag,...bag1,...bag2)


