  // convert the elements in the string upper to lower and lower to upper.


  let str = "ASDF";
  let upper ="QWERTYUIOPASDFGHJKLZXCVBNM";
  let lower ="qwertyuiopasdfghjklzxcvbnm";

  let ans ="";

  for(let i = 0 ; i<str.length;i++){
     for(let j=0 ;j<26 ; j++){

        if(str[i]==upper[j]){

            ans = ans+lower[j]
        }
        else if(str[i]==lower[j]){

            ans = ans +upper[j]
        }
     }
  }
  console.log(ans);