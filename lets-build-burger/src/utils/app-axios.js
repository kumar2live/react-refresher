import axios from 'axios';
import { DB_URL } from './app-urls';

const baseAppUrl = DB_URL;

const AppAxios = axios.create({
  baseURL: baseAppUrl,
})

export default AppAxios;