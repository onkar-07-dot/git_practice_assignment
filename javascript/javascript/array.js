  // change all the elements in the array by 1 which is divisible by 5



  let arr = [ 10,15,20,1,2,3]
  let emp = ""


for(let i = 0 ; i<arr.length; i++){



    if(arr[i]%5==0){

        arr[i]=-1;

    }

    emp+=arr[i]+" ";
}

console.log(emp)