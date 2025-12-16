
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export default {
  login(email, password) {
    return apiClient.post('/login', { email, password });
  },
  register(email, password, password_confirmation, role) {
    return apiClient.post('/register', { email, password, password_confirmation, role });
  },
  logout() {
    return apiClient.post('/logout');
  },
  getAdminStats() {
    return apiClient.get('/admin/stats');
  },
};