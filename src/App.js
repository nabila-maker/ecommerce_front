import React from 'react';
import {BrowserRouter,Switch,Route,} from "react-router-dom"
  import Signup from './pages/Signup'
  import Log from './pages/login'
 import Home from './pages/home'
  import Reservation from './pages/reservation'
 import "./styles/app.scss"

 export const App = () => {


  return (
    
   <BrowserRouter forceRefresh='true'>
  
     <Switch>

      <Route exact path="/"  component={Home}/>
       <Route exact path="/signup" component={Signup}/> 
       <Route exact path="/login" component={Log}/> 
       <Route exact path="/reservation" component={Reservation}/> 
  
      </Switch>

</BrowserRouter>
   
  )
}


export default App;
