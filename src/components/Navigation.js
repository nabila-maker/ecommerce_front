
import React from 'react';
import {Link, withRouter} from "react-router-dom";
import rose from "../assets/img/rose.png";
import user from "../assets/img/user.png";
import "../pages/Signup"
import "../styles/components/navigation.scss";
import {useDispatch} from 'react-redux';
import {logout} from '../store/user.reducer'

function Navigation(props) {

  const dispatch = useDispatch()
  


  return (
    <nav className="nav">
      <Link to="/">
      <img className="logo" src={rose} alt="logo"/>
      </Link>
       <div className="title"> MySkincare</div>
       <div className="user-image">
        
      <Link to="/signup"><img src={user} alt="user"/></Link>
       </div> 
       <button exact to="/Logout" className="nav-active" onClick = {()=>{
                     localStorage.clear()
                   dispatch(logout())
                   props.history.push('/login')
                   
               }}>
               Logout
            </button> 
      
    </nav>
  )
}

export default withRouter(Navigation);