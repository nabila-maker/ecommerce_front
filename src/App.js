import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
  import Signup from './pages/Signup'
  import Log from './pages/login'
 import Home from './pages/home'
  import Reservation from './pages/reservation'

 import "./styles/app.scss"

 export const App = () => {


  return (
    
   <BrowserRouter >
  <Routes>

      <Route exact path="/"  element={<Home/>}/>
       <Route exact path="/signup" element={<Signup/>}/> 
       <Route exact path="/login" element={<Log/>}/> 
       <Route exact path="/reservation"element={<Reservation/>}/> 
       <Route exact path="/reservation"element={<Reservation/>}/> 
      
      </Routes>

</BrowserRouter>
   
  )
}


export default App;
