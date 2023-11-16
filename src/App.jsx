import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'


import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
function App() {

  return (
    <BrowserRouter>
      <nav>
        <div className='navBar'>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

        </div>
      </nav>



      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
