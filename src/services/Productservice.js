import { Api } from '../api-url';
import api from './api';


const productService = {
    getAll : async ()=>{
        return await api.get('/product')
    },


     create : async (data)=>{
    
    return await api.post('/reservation',data)
},

getAllByUser : async (data)=>{
    
    return await api.post('/reservationAllByUser',data)
}
}



export default productService;