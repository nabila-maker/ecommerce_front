import { Api } from '../api-url';
import api from './api';


const productService = {
    getAll : async ()=> api.get(Api.getAll)
    
}

export default productService;