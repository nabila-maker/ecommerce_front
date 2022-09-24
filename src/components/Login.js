import Userservice from '../services/Userservice';
import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {login} from '../store/user.reducer';
import { useDispatch } from 'react-redux';
import {  toast } from 'react-toastify';

 //toast.configure()

function Log(props) {

 
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   

  const dispatch = useDispatch()
   
// const user = {username, email, password}
const submit = async (e)=> {
    e.preventDefault();
 
 try {
  const user =  await Userservice.Login({username, email, password})
  const data = JSON.stringify(user.data)
  localStorage.setItem('User',data)
  console.log(data.id)
  toast.success("content de vous revoir");
dispatch(login(user.data.user))
console.log("vous etes connecté",user)

//  props.history.push("/")
  
} catch (err) {

  console.error("cet utilisateur n'existe pas",err);


}
}

    return (
        <>

        <form className="formSign">
            

            <div className="form">
            <label htmlFor="username">Username*:</label>
            <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>     

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
    
        <div>
          <Link className="simpleLink" to="/signup">Pas encore inscrit? Vous pouvez le faire ici</Link> 
    </div>
    

     </>

    )
        };

export default Log;