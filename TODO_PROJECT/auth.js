
let signbtn = document.querySelector("#register form")

signbtn.addEventListener("submit",fun)

function fun(e){
    e.preventDefault();
    let all_input_tag = document.querySelectorAll("#register input")
    let obj={}
   for(let i=0;i<all_input_tag.length;i++){
    obj[all_input_tag[i].id] = all_input_tag[i].value
   }
   registeruser(obj)
}

async function registeruser(obj){
try {
    
    let register_req = await fetch("http://localhost:3000/users",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json"

        },
        body :JSON.stringify(obj)
    });

    let data = await register_req.json()
    console.log(data);

  if (register_req.ok) {
 
    window.location.href = "./login.html";
    alert("user created successfully")
  
}
    
    
} catch (error) {

    alert("bad request")
    
}
}
console.log("hello")

let loginbtn = document.querySelector("#login form")

loginbtn.addEventListener("submit", fun2)

function fun2(ar){
 
    ar.preventDefault()
    let login_data = document.querySelector("#login input")

    let obj = {}
    for(let i =0;i<login_data.length;i++){
        obj[login_data[i].id] = obj[login_data[i]].value

    }
    console.log(obj)
}