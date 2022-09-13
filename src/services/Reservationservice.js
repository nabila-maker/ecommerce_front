import api from './api';


const reservationService = {
    getAll : async ()=>{
        return await api.get('/reservation')
    }
}

export default reservationService;