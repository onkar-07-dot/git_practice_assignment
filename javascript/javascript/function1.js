  // add two numbers.
  // and substract 5 from it.
  // multiply 10 from it 
  // and divide that number ny 2.


  function add(x,y){

    return x+y;
  }

  function sub(x){
    return x-5 ;
  }

  function mult(x){
    return x*10 ;
  }

  function div(x){
    return x/2;
  }



  let step1=add(10,10);
  let step2=sub(step1);
  let step3=mult(step2);
  let step4=div(step3);
  console.log(step4);
  