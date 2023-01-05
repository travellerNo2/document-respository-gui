import mockjs, { mock } from 'mockjs';

const login = (options) => {
  const { username, passwrod } = options.body;
  return mock({
    user_id: ' @id',
    username: '@name',
    'role|1': ['SUPER_ADMIN', 'normal_user'],
  });
};

export default {
  login,
};
