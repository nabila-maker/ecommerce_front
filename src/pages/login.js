
import Navigation from '../components/Navigation'

import Log from "../components/Login";
import Footer from '../components/Footer';

function Login(props) {
    return (
        <>
        <div className ="Login">
            <Navigation/>
           
            <h1>Login</h1>
            <Log {...props}/>
        </div>
        <Footer/>

       </>
    )
    }
    
    export default Login;




