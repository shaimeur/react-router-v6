import { Link,Route,Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
const Navbar = ()=>{
    return(
        <>
         <div className='navBar'>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

         </div>
         <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
        </>
    )
}

export default Navbar