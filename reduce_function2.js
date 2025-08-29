

let arr =[
    {age:16},
    {age:17},
    {age:18},
    {age:19},
]

let newarr = arr.reduce(function(acc , item){
   let age=item.age

    return acc[age]

},{})

console.log(newarr)