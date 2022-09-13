import Userservice from '../services/Userservice';
import React,{useState} from 'react';
import {Link} from "react-router-dom";


 //toast.configure()

function Log() {

 
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   

  
   
// const user = {username, email, password}
const submit = async (e)=> {
    e.preventDefault();
 
 try {
  await Userservice.Login({username, email, password})
console.log("vous etes connecté")
  
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