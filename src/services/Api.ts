import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://viacep.com.br/ws', 
    timeout: 5000,

})