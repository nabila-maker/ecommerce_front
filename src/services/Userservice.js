import api from './api';


const Userservice = {
   Signup : async (user)=>{
        return await api.post('/user',user)
    },
    Login : async (user)=>{
        return await api.post('/user/authenticate',user)
    },

   

    getAllByUser : async (data)=>{
    
        return await api.get('/reservationAllByUser',data)
    },
   

    delete : async (reservationId)=>{
    
        return await api.delete(`/reservationAllByUser/?reservationId=${reservationId}`)
    },

    update : async (reservationId)=>{
    
        return await api.put("/reservationAllByUser",{reservationId})
    },
   
}

export default Userservice;