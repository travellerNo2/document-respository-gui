import server from '../index';

/**
 * {userId: stirng, username: string, role: string}
 */
export const login = (username, password) =>
  server.post('/user/login', { username, password });
