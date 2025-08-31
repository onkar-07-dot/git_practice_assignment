// write the function to check the given string is contained vowels or not and if yes then return true else false



function isvowel(str){

    for(let i=0;i<str.length;i++){

        if(str[i]=='a'||str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u'){

            return true;
        }
        else{
            return false;
        }
    }
}

console.log(isvowel("omkar"));
console.log(isvowel("qsdf"));