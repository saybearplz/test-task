import axios from 'axios';
import config from '@/config/index.json';

const production = process.env.NODE_ENV === 'production';
const apiUrl = production ? config.apiProd : config.apiDev;

export default axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
