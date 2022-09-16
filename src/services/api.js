
import axios from 'axios';
import store from '../store';
import { login } from '../store/user.reducer';

const api = axios.create({
  baseURL: `http://localhost:8080/`,
  withCredentials:true,

});

api.interceptors.request.use(request=>{
   const state = store.getState();
   let userData=null

   if(localStorage.getItem('User')){
     userData=JSON.parse(localStorage.getItem('User'))

   }
    
  if(request.headers && userData){
    
    const token = userData.expireDate - Date.now <= 30000? userData.refreshToken : userData.token
  request.headers["Authorization"]=`Bearer ${token}`;
  console.log(token)
}

  

  return request;
})

api.interceptors.response.use(response=>{
  return response;

},
async(error)=>{
  if(error.response.status !==401){
    return Promise.reject(error);
  } 

try{
  const response = await api.get('user/authenticate');
   store.dispatch(login(response.data))
  error.hasRefreshedToken=true;
}

  catch(error){
    const tokenError =new Error("cannot refresh token");
    return Promise.reject(tokenError);

  }
})

export default api;

