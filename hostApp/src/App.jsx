import Button from "remoteApp/Button"
import Navbar from "remoteApp/Navbar"
import './App.css'
import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
function App() {
 
  return (
    <BrowserRouter>
    <div >
      <div>
       <Navbar Link ={Link}/>
      </div>
      <Button/>
        <Routes>
         <Route path='/home' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App
