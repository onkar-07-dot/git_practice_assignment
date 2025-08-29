

let arr = [

    { name:"onkar" , id : 1},
    { name:"shreyash" , id : 2},
    { name:"push" , id : 3}
]

let newarr = arr.reduce(function(acc , item){

    let name =item.name;
    let id = item.id
    acc[name]=id
    return acc

},{})

console.log(newarr)