import axios from 'axios';

const server = axios.create({
  baseURL: 'http://1.116.165.46:3000',
});

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

export default server;
