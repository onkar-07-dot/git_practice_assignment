  // convert the element in the array to the string without ""


  let arr = [ 2,-4,6,8,-9]

  let emp = "";

  for(let i=0 ; i<arr.length ; i++){

    if(arr[i]<0){

        arr[i]=0;
    }

    emp =emp+arr[i];
  }
  console.log(emp);
  console.log(typeof(emp));