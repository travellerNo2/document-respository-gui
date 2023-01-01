import axios from 'axios';

const server = axios.create({
  baseURL: 'http://1.116.165.46:8080',
});

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export default server;
