

let arr = [

    { name:"onkar" , subject : "Javascript"},
    { name:"onkar" , subject : "HTML"},
    { name:"onkar" , subject : "python"},
    { name:"shreyash" , subject : "Javascript"},
    { name:"shreyash" , subject : "HTML"},
    { name:"shreyash" , subject : "python"},
    { name:"push" , subject : "Javascript"},
    { name:"push" , subject : "HTML"},
    { name:"push" , subject : "python"},
]

let newarr = arr.reduce(function(acc , item){
   
    let name = item.name
    let sub = item.subject
    

    acc[name]= acc[name] || []
    acc[name].push(sub)




    return acc

},{})


console.log(newarr)