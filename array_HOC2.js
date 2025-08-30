

let vivekdata={

    name:"vivek",
    sub1:"js",
    sub2:"html",
    marks1:88,
    marks2:99

}

let nrupuldata={

    name:"nrupul",
    sub1:"java",
    sub2:"python",
    marks1:90,
    marks2:65

}




let combinedata = [vivekdata , nrupuldata]

let massagedata = combinedata.map((item)=>{

    let obj = {

    name:item.name,
    marks:[],
   

 }
    obj.marks.push({ sub1:item.sub1,marks1:item.marks1},{sub2:item.sub2,marks2:item.marks2})
      
    return obj
   
})



console.log(massagedata)
