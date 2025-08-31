// given an array , give the output like == []



let arr =[[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10,11,12],
          [13,14,15,16]
        ]

function diagonal(k){

let bag = ""
//let k =6;
let row ,col;

 for(let i=0;i<arr.length;i++){

    for(let j = 0 ;j<arr[i].length;j++){

        if(k==arr[i][j]){
            row=i , col =j
            //console.log(i,j)
        }
        

    }
    
 }

 let diff = row-col;
 let sum = row+col
 let bag1=""

for(let a = 0 ; a<arr.length ;a++){

    for(let b =0 ; b<arr[a].length;b++){

        if(a-b==diff){

            bag+=arr[a][b]+" "
        }
        if(a+b==sum){

            bag1+=arr[a][b]+" "
        }
    }
}
console.log(bag)
console.log(bag1)

}
 

diagonal(6)
console.log("****************************************")
diagonal(2)
console.log("****************************************")
diagonal(3)
console.log("****************************************")
diagonal(4)
