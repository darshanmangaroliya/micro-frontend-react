import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

function App() {

  return (
      <BrowserRouter>
    <div >
      <div>
       <Navbar Link={Link}/>
      </div>
        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App
