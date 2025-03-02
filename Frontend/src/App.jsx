import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Collect from './components/Collect'
import Register from './Auth/Register'
import Login from './Auth/Login'
import After from './components/After'
import First from './Blog/First'
import Rates from './components/Rates'




function App() {

  return (
    <div>
     
     
       <BrowserRouter>
       <Routes>
        
       <Route exact path="/" element={<Collect/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Registration" element={<Register/>} />
          <Route exact path="/Dashboard" element={<After/>} />
          <Route exact path="/blog" element={<First/>} />
          <Route exact path="/prize" element={<Rates/>} />
          </Routes>
       </BrowserRouter>      

     
    </div>

  )
}

export default App
