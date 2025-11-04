import react from 'react'
import {Link, NavLink} from 'react-router-dom'

const list = [
    { path : "/" , title : "Home"},
    {path : "/Contact" , title : "Contact"},
    {path : "/Users" , title : "Users"},
    {path : "/about" , title : "About"}
]

function Navbar(){
    return (
    <div style={{display:'flex',
     justifyContent:'space-around' , 
     border:'1px solid red' , 
     margin:'20px', padding:'10px',
     background :'light-blue'}
     }>

        {list.map((item ,index)=>{
            return (
                <NavLink 
                style ={({isActive})=>{
                    return isActive
                    ? {textDecoration: 'none' , color:'red'}
                    :{textDecoration :'none' , color:'blue'}
                }}
                to={item.path}
                key={`${index}-${item.path}`}>
                    {item.title}
                </NavLink>
            )
        })}

      {/* <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Users">Users</Link>
      <Link to="/about">About</Link> */}
    </div>
    )
}

export default Navbar