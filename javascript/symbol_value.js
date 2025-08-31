// given the symbol and assigning the value to each symbol.calculate the sum of it.
// let @=2, #=3,$=4,%=5,&=7


let syb="##@%%$&"
let sum=0

let diary={
    "@":2, 
    "#":3,
    "$":4,
    "%":5,
    "&":7
};

for(let i=0;i<syb.length;i++){

    sum+=diary[syb[i]]

}
console.log(sum)