import api from './api';


const Userservice = {
   Signup : async (user)=>{
        return await api.post('/user',user)
    },
    Login : async (user)=>{
        return await api.post('/user/authenticate',user)
    }
}

export default Userservice;