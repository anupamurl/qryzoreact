import axios from 'axios';

const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
};

export const userService = {
  getAll: async () => {
    const response = await api.get('/user');
    return response.data;
  },

  create: async (userData: any) => {
    const response = await api.post('/user', userData);
    return response.data;
  },

  update: async (id: string, userData: any) => {
    const response = await api.patch(`/user/${id}`, userData);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/user/${id}`);
    return response.data;
  },
};