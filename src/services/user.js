import axios from 'axios';

export const httpClient = axios.create({
    baseURL: "https://demo.thegrouplab.com/api"
});

export const getUsers = () => {
   return httpClient.get('/users').then(res => res.data);
};
