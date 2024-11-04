import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    },
});

export const postTextRequest = async (text) => {
    try {
      const response = await api.post('/', { text });
      return response.data;
    } catch (error) {
      console.error('Error making request:', error);
      throw error;
    }
};