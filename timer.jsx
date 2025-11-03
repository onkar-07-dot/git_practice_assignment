
import react from "react"
import { useState , useEffect } from "react"

 const Timer = ()=>{

    const [timer , settimer] = useState(30)

   useEffect (()=>{
   let intervalId = setInterval(()=>{
        
    settimer((prev)=>{
        if(prev ===1){
            clearInterval(intervalId)
        }
         return prev - 1
    })
   
},1000);

        return () =>{
            console.log("cleanup the processes")
            clearInterval(intervalId)
        }
 },[ ])

    return (
        <div>
            <h1 > Timer:{timer}</h1>
        </div>
    )
 }

 export default Timer