// Given the data og the students with their names and marks,print the grade ,
//  name and total maximum marks of the students
// Output = v-prateek-90 
// VI-rahul-124 
// VII-sandhya-199


let arr = [

    {

        grade : "V",
        students : [
            {name : "nrupul" , marks :[10,20,30]},
            {name : "prateek", marks :[20,30,40]}  
        ]
    },

    {

        grade : "VI" ,
        students :[

            {name : "aman" , marks:[12,23,45]},
            {name : "rahul", marks:[23,45,56]}
        ]
    },

    {
        grade : "VII" ,
        students :[

            {name : "yogesh" , marks:[45,56,76]},
            {name : "sandhya", marks:[76,89,]}
        ]
    }
]

for( let k = 0 ; k<arr.length;k++){

let obj = arr[k]


//console.log(obj)
//console.log(obj.grade)
let arr1 = obj.students
//console.log(arr1)

let heigh =0;
let topper;
for(let i =0 ;i<arr1.length;i++){
    let per_info =arr1[i]
    let total = per_info.marks[0]+per_info.marks[1]+per_info.marks[2]
     //console.log(total)
     if(heigh<total){
        heigh=total;
        topper=per_info.name
     }
     
   
     }
     console.log(obj.grade+"-"+topper+"-"+heigh)
     

    }

