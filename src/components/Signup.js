import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
  import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Userservice from '../services/Userservice';
import "../styles/components/signup.scss";


// toast.configure()

const Signup = (props) => {

   


    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   
const submit = async (e)=> {
      
    e.preventDefault();
 
 try {
   await Userservice.Signup({name, email, password})
   toast.success("cet utilisateur a bien été créér",{position: toast.POSITION.TOP_CENTER});
  props.history.push("/login")


} catch (err) {

   console.error(err);
      toast.warn(err.message,{position: toast.POSITION.TOP_CENTER});
console.log(err.message)

}
}

    return (
        <>
        <ToastContainer/>

        <form className="formSign">


            <div className="form">
            <label htmlFor="username">Username*:</label>
            <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={(e)=>setName(e.target.value)} required/>     

        </div>
        

        <div className="form">
            <label htmlFor="email">Email*:</label>
            <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>     
        </div>

        <div className="form">
            <label htmlFor="password">password*:</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>  
            
        </div>
            
 
      <button onClick={submit}>Submit</button> 
        </form>
    
        <div className='simpleLink'>
          <Link className="simpleLink" to="/Login">Déjà inscrit? Connectez-vous</Link> 
    </div>
    

     </>

    )
        };

export default Signup;