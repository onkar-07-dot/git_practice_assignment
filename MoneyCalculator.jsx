
import react from 'react'
import {useState} from 'react'

const MoneyCal = ()=>{

    const [data , setdata] = useState(10000);
    const deposite = ()=>{
      const newAmount = data +1000
      setdata(newAmount)
    }
    const withdraw = ()=>{
       const newAmount = data - 1000
       setdata(newAmount)
    }
    console.log("updated value : ",data)
    return (
        <div>
           <h1>MoneyCalculator :{data}</h1> 
           <button  onClick ={deposite}>Deposite : 1000</button>
           <button disabled = {data <=0} onClick ={withdraw}>WithDraw : 1000</button>
        </div>
    )
}

export default MoneyCal