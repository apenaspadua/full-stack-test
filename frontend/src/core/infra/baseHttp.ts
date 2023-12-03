import axios from 'axios';

export const globalAxios = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});