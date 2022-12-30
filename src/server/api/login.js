import server from '../index';

export const login = (username, password) =>
  server.post('/login', { username, password });
