import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'


import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
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
