import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portifolio-k6gn.onrender.com/',
});

export default api;