
import react from 'react'
import { Route ,Routes } from 'react-router-dom'
import Homepage from '../pages/homepage'
import About from '../pages/about'
import Contact from '../pages/contact'
import Users from '../pages/users'
import SingleUser from '../pages/SingleUser';
import Pagenotfound from '../pages/pagenotfound'

function MainRouter(){
return(
    <div>
<Routes>
    <Route path='/' element= {<Homepage/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/users' element= {<Users/>} />
    <Route path ='/users/:userId' element= {<SingleUser />} />
    <Route path = "*" element = {<Pagenotfound />} />

   </Routes>
   </div>
)
}


export default MainRouter