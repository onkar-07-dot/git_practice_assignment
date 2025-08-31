// given a string , find the missing vowel from it.

function missvowels(str){
let bag={
    a:1,
    e:1,
    i:1,
    o:1,
    u:1
};

for(let i=0;i<str.length;i++){

    delete bag[str[i]]

    

}
for(key in bag){

    console.log(key)
}
}


missvowels("masai")
missvowels("onkar")
missvowels("shreyash")
   