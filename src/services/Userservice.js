import api from './api';


const Userservice = {
   Signup : (user)=>{
        return api.post('/user',user)
    },
    Login : (user)=>{
        return api.post('/user/authenticate',user)
    },

   

    getAllByUser : (data)=>{
    
        return api.get('/reservationAllByUser',data)
    },
   

    delete : async (reservationId)=>{
    console.log(await api.delete(`/reservationAllByUser/?reservationId=${reservationId}`))
        return api.delete(`/reservationAllByUser/?reservationId=${reservationId}`)
    },

    update : (reservationId)=>{
    
        return api.put("/reservationAllByUser",{reservationId})
    },
   
}

export default Userservice;