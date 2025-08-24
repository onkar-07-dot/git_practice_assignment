//find the next graeter element in thr array

function nextgreater(){
let arr =[1,3,2,4]
let stack=[]


for(let i=0;i<arr.length;i++){
    let j=i+1

     while(j<arr.length){
         if(arr[i]<arr[j]){

             stack.push(arr[j])
             break
          }
    
        j++

    }

    
    if(j==arr.length){
       stack.push(-1)
    }

   

}
console.log(stack)
}


nextgreater()

