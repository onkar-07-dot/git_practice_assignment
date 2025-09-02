

function fetchusers(){

     var obj1 ={
        name:"peter",
        id:1,
     } ;
    
      var obj2 ={
        name:"john",
        id:2,
     }
   

      var obj3 ={
        name:"mary",
        id:3,
     } 
   
      var obj4 ={
        name:"alex",
        id:4,
     } 
      console.log( obj1) 
      console.log(obj2)
      console.log(obj3)
     console.log(obj4)

}
//(fetchusers())

let users = fetchusers()

return new Promise((res,rej)=>{


   
}) 

users
.then((data)=>{
   
        
       // console.log(data.name)
    
    
})

.catch((err)=>{
    console.log(err)
})

function  fetchusers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
}
async function main(){
    let users = await fetchusers();
    for(let user of users){
        let userId = user.id
        console.log(user.name)
    }
}

main()