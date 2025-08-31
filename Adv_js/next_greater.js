


function next_greater(){

    let arr=[5,2,8,11,4,2]
    let stack=[]
    let ans =[]

    for(let i=arr.length-1;i>0;i--){

        while(stack.length!=0 && stack[stack.length-1]<=arr[i]){
           
            stack.pop()
        }
        if(stack.length==0){
            ans.push(-1);

        }
        else{
            ans.push(stack[stack.length-1])
        }

        stack.push(arr[i])
    }

    console.log(ans.reverse())
}

next_greater()

