

let students=[

    {id:1,name:"onkar" ,subjectId:1},
    {id:2,name:"shri" ,subjectId:2},
    {id:3,name:"push" ,subjectId:3},
    {id:4,name:"om" ,subjectId:4}

]

let subjectdata=[
    {id:1,name:"javascript"},
    {id:2,name:"html"},
    {id:3,name:"python"},
    {id:4,name:"css"},
]
let subhash= subjectdata.reduce(function(acc,item){

    acc[item.id]=item.name
    return acc
},{})

let obj = students.reduce(function(acc,item){

   acc[item.name]=(subhash[item.subjectId])
    // acc[item.name].
    return acc

},{})
console.log(obj)